import { useNavigate } from "react-router";
import ComposeForm from "@/shared/components/forms/compose-form/ComposeForm";
import providerSchema from "./types/provider-schema";
import { providerSubForms } from "./types/input";
import Button from "@/shared/components/button/Button";
import { token } from "@styled-system/tokens";
import { useAddProviders } from "../hook/use-add-provider";
import Spinner from "@/shared/components/spinner/Spinner";
import ErrorToast from "@/shared/components/toast/error/ErrorToast";

const AddProvider = () => {
    const navigate = useNavigate();
    const { error, loading, addProvider } = useAddProviders();

    return (
        <>
            <Button
                color="white"
                hoverColor={token("colors.primaryColorHover") + "20"}
                borderColor={token("colors.primaryColor")}
                textColor={token("colors.primaryColor")}
                onClick={() => navigate(-1)}
            >
                Regresar
            </Button>
            {loading ? (
                <Spinner />
            ) : (
                <ComposeForm
                    subForms={providerSubForms}
                    schema={providerSchema}
                    buttonData={{ text: "Agregar proveedor" }}
                    onSubmit={(data) =>
                        addProvider(data).then(() => navigate(-1))
                    }
                    onCancel={() => navigate(-1)}
                />
            )}
            {error && (
                <ErrorToast
                    message={error.message}
                    onClose={() => {}}
                />
            )}
        </>
    );
};

export default AddProvider;
