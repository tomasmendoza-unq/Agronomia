import { css } from "@styled-system/css";
import Footer from "./components/footer/Footer";
import InsertForm from "./components/insert-form/InsertForm";
import type { CredentialsFormProps } from "./credentials-form";
import { styles } from "./styles";

const CredentialsForm = ({ title, inputs, button, links }: CredentialsFormProps) => {
    return (
        <div className = {css(styles.container)}>
            <header><h1 className = {css(styles.title)}>{title}</h1></header>
            <InsertForm inputs = {inputs} button = {button} />
            <Footer links = {links} />
        </div>
    )
}

export default CredentialsForm;