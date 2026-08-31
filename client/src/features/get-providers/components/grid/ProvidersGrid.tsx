import { useState, useEffect } from "react";
import { useGetProviders } from "../../hooks/use-get-providers";
import Spinner from "@/shared/components/spinner/Spinner";
import { ProviderCard } from "../card/ProviderCard";

import { styles } from "./style";
import { useNavigate, useSearchParams } from "react-router";
import { Pagination } from "@/shared/components/pagination/Pagination";
import { EmptyState } from "./emptyState/EmptyState";
import { TractorIcon } from "@/shared/components/icon/components/icons/Tractor";
import Button from "@/shared/components/button/Button";
import { token } from "@styled-system/tokens";

export const ProvidersGrid = () => {
    const { data, loading, getProviders } = useGetProviders();
    const { container, grid, spinnerWrapper } = styles();
    const [searchParams] = useSearchParams();
    const search = searchParams.get("search") ?? "";
    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const [prevSearch, setPrevSearch] = useState(search);

    if (search !== prevSearch) {
        setPrevSearch(search);
        setPage(0);
    }

    useEffect(() => {
        getProviders(page, search);
    }, [page, search]);

    return (
        <div className={container}>
            {loading && (
                <div className={spinnerWrapper}>
                    <Spinner />
                </div>
            )}

            {data && (
                <div className={grid}>
                    {data.content.map((provider) => (
                        <ProviderCard
                            key={provider.id}
                            provider={provider}
                        />
                    ))}
                </div>
            )}

            {data && data.content.length === 0 && !loading && (
                <EmptyState
                    icon={<TractorIcon />}
                    title="Todavía no cargaste ningún proveedor"
                    description="Agregá tus proveedores para poder asociar productos y armar cotizaciones."
                    action={
                        <Button
                            color={token("colors.primaryColor")}
                            hoverColor={token("colors.primaryColorHover")}
                            textColor="white"
                            onClick={() => navigate("nuevo-proveedor")}
                        >
                            + Añadir proveedor
                        </Button>
                    }
                />
            )}

            {data && data.totalPages > 1 && (
                <Pagination
                    currentPage={page + 1}
                    totalPages={data.totalPages}
                    onPageChange={(newPage) => setPage(newPage - 1)}
                />
            )}
        </div>
    );
};
