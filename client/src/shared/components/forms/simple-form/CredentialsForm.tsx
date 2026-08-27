import Button from "../../button/Button";
import type { Schema } from "../validation-form/shema";
import ValidationForm from "../validation-form/ValidationForm";
import Footer from "./components/footer/Footer";
import type { CredentialsFormProps } from "./credentials-form";
import { styles } from "./styles";
import { token } from "@styled-system/tokens";

function CredentialsForm<T extends Schema>({
    title,
    isLoading,
    inputs,
    button,
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
                <Button
                    type="submit"
                    fullWidth
                    color={token("colors.primaryColor")}
                    hoverColor={token("colors.primaryColorHover")}
                >
                    {button.text}
                </Button>
            </ValidationForm>
            <Footer links={links} />
        </div>
    );
}

export default CredentialsForm;
