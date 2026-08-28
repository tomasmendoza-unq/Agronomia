import { pageWrapper, card } from "./styles";
import loginInputs from "./types/inputs";
import loginLinks from "./types/links";
import schema from "./types/schema";
import ErrorToast from "@/shared/components/toast/error/ErrorToast";
import useLogin from "../../hooks/use-login";
import SimpleForm from "@/shared/components/forms/simple-form/SimpleForm";

const Login = () => {
    const { isError, login, refresh, loading } = useLogin();

    return (
        <section className={pageWrapper}>
            <div className={card}>
                <SimpleForm
                    title="Bienvenido"
                    isLoading={loading}
                    inputs={loginInputs}
                    buttonData={{ text: "Iniciar sesión" }}
                    schema={schema}
                    onSubmit={login}
                    links={loginLinks}
                />
            </div>
            {isError && (
                <ErrorToast
                    message={
                        "Correo o contraseña incorrectos. Verifique sus datos e intente nuevamente"
                    }
                    onClose={refresh}
                />
            )}
        </section>
    );
};

export default Login;
