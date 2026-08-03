import Footer from "./components/footer/Footer";
import InsertForm from "./components/insert-form/InsertForm";
import type { CredentialsFormProps } from "./credentials-form";
import { styles, compactContainer } from "./styles";

const CredentialsForm = ({
    title,
    inputs,
    button,
    links,
    compact = false,
}: CredentialsFormProps) => {
    const { container, headerTitle } = styles();
    const containerClass = compact ? compactContainer : container;

    return (
        <div className={containerClass}>
            <header>
                <h1 className={headerTitle}>{title}</h1>
            </header>
            <InsertForm
                inputsData={inputs}
                buttonData={button}
            />
            <Footer links={links} />
        </div>
    );
};

export default CredentialsForm;
