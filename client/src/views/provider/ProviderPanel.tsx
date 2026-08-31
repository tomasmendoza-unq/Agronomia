import { Outlet } from "react-router";
import { styles } from "./styles";
export const ProviderPanel = () => {
    const { panel, h1 } = styles();

    return (
        <section className={panel}>
            <h1 className={h1}>Proveedores</h1>

            <Outlet />
        </section>
    );
};
