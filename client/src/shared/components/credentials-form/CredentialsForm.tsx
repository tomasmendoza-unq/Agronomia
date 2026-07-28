import Footer from "./components/footer/Footer";
import type { CredentialsFormProps } from "./credentials-form";

const CredentialsForm = ({ title, inputs, button, links }: CredentialsFormProps) => {
    return (
        <div>
            <header>{title}</header>
            <Form inputs = {inputs} button = {button} />
            <Footer links = {links} />
        </div>
    )
}

export default CredentialsForm;