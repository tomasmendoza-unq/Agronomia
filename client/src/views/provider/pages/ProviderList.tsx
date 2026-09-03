import { useLocation, useNavigate } from "react-router";
import Button from "@/shared/components/button/Button";
import { SearchProvider } from "@/features/search-providers/components/SearchProvider";
import SuccessToast from "@/shared/components/toast/success/SuccessToast";

import { token } from "@styled-system/tokens";
import { styles } from "./styles";
import { ProvidersGrid } from "@/features/get-providers/components/grid/ProvidersGrid";

export const ProvidersList = () => {
    const { optionsRow } = styles();
    const navigate = useNavigate();
    const location = useLocation();

    const providerUpdated = location.state?.providerUpdated === true;

    const closeSuccessToast = () => {
        navigate(location.pathname, { replace: true, state: null });
    };

    return (
        <>
            {providerUpdated && (
                <SuccessToast
                    message="El proveedor fue editado correctamente"
                    onClose={closeSuccessToast}
                />
            )}
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
