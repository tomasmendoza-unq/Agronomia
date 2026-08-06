import CredentialsForm from "@/shared/components/credentials-form/CredentialsForm";
import styles from "./styles";
import loginInputs from "./types/inputs";
import loginLinks from "./types/links";
import schema from "./types/schema";
import ErrorToast from "@/shared/components/toast/error/ErrorToast";
import useLogin from "../../hooks/use-login";

const Login = () => {
    
    const { isError, login, refresh } = useLogin();

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
            {isError && <ErrorToast 
                message={"Correo o contraseña incorrectos. Verifique sus datos e intente nuevamente"} 
                onClose={refresh} 
            />}
        </section>
    );
};

export default Login;
