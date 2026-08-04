import CredentialsForm from "@/shared/components/credentials-form/CredentialsForm";
import styles from "./styles";
import loginInputs from "./types/inputs";
import loginLinks from "./types/links";
import { useAuth } from "../../../auth/hooks/use-auth";
import schema from "./types/schema";
import ErrorToast from "@/shared/components/toast/error/ErrorToast";
import { ErrorCause } from "@/core/server/types/error-cause";

const Login = () => {
    
    const { login, error } = useAuth();

    const irError = error?.isCause(ErrorCause.INVALID_CREDENTIALS);

    return (
        <section className={styles}>
            <CredentialsForm
                title="Bienvenido"
                inputs={loginInputs}
                button={{text: "Iniciar sesión"}}
                schema={schema}
                onSubmit={login}
                links={loginLinks}
            />
            {irError && <ErrorToast message = {"Correo o contraseña incorrectos. Verifique sus datos e intente nuevamente"} onClose={() => {}} />}
        </section>
    );
};

export default Login;
