import { useEffect } from "react";
import { useGetProviders } from "../hooks/use-get-providers";

export const ProvidersGrid = () => {
    const { data, loading, getProviders } = useGetProviders();

    useEffect(() => {
        getProviders();
    }, []);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {data &&
                data.content.map((provider) => (
                    <div key={provider.id}>
                        <h3>{provider.legalName}</h3>
                        <p>{provider.phoneNumber}</p>
                    </div>
                ))}
        </div>
    );
};
