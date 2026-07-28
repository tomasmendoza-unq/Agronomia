import Footer from "./components/footer/Footer";
import InsertForm from "./components/insert-form/InsertForm";
import type { CredentialsFormProps } from "./credentials-form";

const CredentialsForm = ({ title, inputs, button, links }: CredentialsFormProps) => {
    return (
        <div>
            <header>{title}</header>
            <InsertForm inputs = {inputs} button = {button} />
            <Footer links = {links}/>
        </div>
    )
}

export default CredentialsForm;