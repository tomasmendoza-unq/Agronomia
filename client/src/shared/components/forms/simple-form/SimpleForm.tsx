import ButtonsContainer from "../components/buttons-container/ButtonsContainer";
import type { Schema } from "../validation-form/shema";
import ValidationForm from "../validation-form/ValidationForm";
import Footer from "./components/footer/Footer";
import type { CredentialsFormProps } from "./simple-form";
import { styles } from "./styles";

function SimpleForm<T extends Schema>({
    title,
    isLoading,
    inputs,
    buttonData,
    cancelOption,
    links,
    schema,
    onSubmit,
}: CredentialsFormProps<T>) {
    const { container, headerTitle } = styles();

    return (
        <div className={container}>
            <header>
                <h1 className={headerTitle}>{title}</h1>
            </header>
            <ValidationForm
                inputsData={inputs}
                schema={schema}
                onSubmit={onSubmit}
                isLoading={isLoading}>
            </ValidationForm>
            <ButtonsContainer buttonData={buttonData} cancelOption={cancelOption} /> 
            {links && <Footer links={links} />}
        </div>
    );
}

export default SimpleForm;
