import { EmptyState } from "../emptyState/EmptyState";
import Button from "@/shared/components/button/Button";
import { token } from "@styled-system/tokens";
import { useNavigate } from "react-router";
import ClientIcon from "@/shared/components/icon/components/icons/ClientIcon";

const EmptyClient = () => {
    const navigate = useNavigate();
    
    return (
        <EmptyState
            icon={<ClientIcon />}
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
    )
}

export default EmptyClient;