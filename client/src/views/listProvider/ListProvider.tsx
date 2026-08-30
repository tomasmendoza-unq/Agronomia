import { SearchProvider } from "@/features/search-providers/components/SearchProvider";
import { ProvidersGrid } from "../../features/get-providers/components/grid/ProvidersGrid";
import { h1, panel } from "./styles";

export const ListProvider = () => (
    <section className={panel}>
        <h1 className={h1}>Proveedores</h1>
        <SearchProvider />
        <ProvidersGrid />
    </section>
);
