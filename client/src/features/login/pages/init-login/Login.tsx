import styles from "./styles";
import loginButton from "./types/button";
import loginInputs from "./types/inputs";
import loginLinks from "./types/links";

const Login = () => {
    return (
        <section className = {styles}>
            <CredentialsForm 
                title = "Bienvenido"
                inputs = {loginInputs}
                button = {loginButton} // pasar por parametro la funcionalidad al apretar botón
                links = {loginLinks}
            />
        </section>
    )
}

export default Login;