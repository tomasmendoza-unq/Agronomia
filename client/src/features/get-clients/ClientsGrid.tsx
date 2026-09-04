import Spinner from "@/shared/components/spinner/Spinner";
import { useGetClients } from "./hooks/use-get-clients";
import { EmptyState } from "./components/emptyState/EmptyState";
import { TractorIcon } from "@/shared/components/icon/components/icons/Tractor";
import Button from "@/shared/components/button/Button";
import { token } from "@styled-system/tokens";
import { Pagination } from "@/shared/components/pagination/Pagination";
import { useNavigate, useSearchParams } from "react-router";
import { styles } from "./style";
import { useEffect, useState } from "react";
import { ClientCard } from "./components/card/ClientCard";

export const ClientsGrid = () => {
    const { data, loading, getClients } = useGetClients();
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
        getClients(page, search);
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
                    {data.content.map((client) => (
                        <ClientCard
                            key={client.id}
                            client={client}
                        />
                    ))}
                </div>
            )}

            {data && data.content.length === 0 && !loading && (
                <EmptyState
                    icon={<TractorIcon />}
                    title="Todavía no hay clientes cargados en el sistema" 
                    description="Agregá tus clientes para poder asociar productos y armar cotizaciones."
                    action={
                        <Button
                            color={token("colors.primaryColor")}
                            hoverColor={token("colors.primaryColorHover")}
                            textColor="white"
                            onClick={() => navigate("nuevo-cliente")}
                        >
                            + Añadir cliente
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

export default ClientsGrid;
