import CredentialsForm from "@/shared/components/credentials-form/CredentialsForm";
import styles from "./styles";
import loginButton from "./types/button";
import loginInputs from "./types/inputs";
import loginLinks from "./types/links";
import { useAuth } from "../../../auth/hooks/use-auth";

const Login = () => {
    const { login } = useAuth();

    return (
        <section className={styles}>
            <CredentialsForm
                title="Bienvenido"
                inputs={loginInputs}
                button={loginButton(login)}
                links={loginLinks}
            />
        </section>
    );
};

export default Login;
