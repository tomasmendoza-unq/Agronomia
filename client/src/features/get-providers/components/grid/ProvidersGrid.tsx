import { useEffect } from "react";
import { useGetProviders } from "../../hooks/use-get-providers";
import Spinner from "@/shared/components/spinner/Spinner";
import { ProviderCard } from "../card/ProviderCard";
import { styles } from "./style";

export const ProvidersGrid = () => {
    const { data, loading, getProviders } = useGetProviders();
    const { container, grid, spinnerWrapper, emptyState } = styles();

    useEffect(() => {
        getProviders();
    }, []);

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
                <p className={emptyState}>No hay proveedores para mostrar.</p>
            )}
        </div>
    );
};
