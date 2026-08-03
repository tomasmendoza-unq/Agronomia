import Footer from "./components/footer/Footer";
import InsertForm from "./components/insert-form/InsertForm";
import type { CredentialsFormProps } from "./credentials-form";
import { styles } from "./styles";

function CredentialsForm<T extends object>({ 
    title, 
    inputs, 
    button, 
    links,
    schema,
    onSubmit
}: CredentialsFormProps<T>) {

    const { container, headerTitle } = styles();
    
    return (
        <div className={container}>
            <header>
                <h1 className={headerTitle}>{title}</h1>
            </header>
            <InsertForm 
                inputsData={inputs} 
                buttonData={button} 
                schema={schema}
                onSubmit={onSubmit}
            />
            <Footer links = {links} />
        </div>
    )
}

export default CredentialsForm;