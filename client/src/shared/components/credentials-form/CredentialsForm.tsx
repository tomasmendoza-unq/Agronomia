import Footer from "./components/footer/Footer";
import InsertForm from "../form/InsertForm";
import type { CredentialsFormProps } from "./credentials-form";
import { styles } from "./styles";
import type { Schema } from "./types/shema";
import Button from "../button/Button";
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
            <InsertForm
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
            </InsertForm>
            <Footer links={links} />
        </div>
    );
}

export default CredentialsForm;
