import type { SubFormProps } from "./types/sub-form";

interface FormContainerProps {
    subForms: React.ReactElement<SubFormProps>[];
    buttonTitle: string
}

const ComposeForm = ({subForms}: FormContainerProps) => {
    return (
        <section>
            {subForms.map(subForm => subForm)}
        </section>
    )
}

export default ComposeForm;