import CredentialsForm from "@/shared/components/credentials-form/CredentialsForm";
import styles from "./styles";
import loginInputs from "./types/inputs";
import loginLinks from "./types/links";
import { useAuth } from "../../../auth/hooks/use-auth";
import schema from "./types/schema";

const Login = () => {
    
    const { login } = useAuth();

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
        </section>
    );
};

export default Login;
