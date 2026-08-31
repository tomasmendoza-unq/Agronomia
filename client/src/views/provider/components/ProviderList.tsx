import { useNavigate } from "react-router";
import Button from "@/shared/components/button/Button";
import { SearchProvider } from "@/features/search-providers/components/SearchProvider";

import { token } from "@styled-system/tokens";
import { styles } from "../styles";
import { ProvidersGrid } from "@/features/get-providers/components/grid/ProvidersGrid";

export const ProvidersList = () => {
    const { optionsRow } = styles();
    const navigate = useNavigate();

    return (
        <>
            <div className={optionsRow}>
                <SearchProvider />
                <Button
                    color="white"
                    hoverColor={token("colors.primaryColorHover") + "20"}
                    borderColor={token("colors.primaryColor")}
                    textColor={token("colors.primaryColor")}
                    onClick={() => navigate("nuevo-proveedor")}
                >
                    + Añadir proveedor
                </Button>
            </div>

            <ProvidersGrid />
        </>
    );
};
