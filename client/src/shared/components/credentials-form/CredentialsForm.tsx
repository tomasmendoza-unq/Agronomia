import Footer from "./components/footer/Footer";
import InsertForm from "./components/insert-form/InsertForm";
import type { CredentialsFormProps } from "./credentials-form";
import { container, headerTitle } from "./styles";

const CredentialsForm = ({ title, inputs, button, links }: CredentialsFormProps) => {
    return (
        <div className = {container}>
            <header>
                <h1 className = {headerTitle}>{title}</h1>
            </header>
            <InsertForm 
                inputsData = {inputs} 
                buttonData = {button} 
            />
            <Footer links = {links} />
        </div>
    )
}

export default CredentialsForm;