import { useForm } from "react-hook-form";
import type { InferData } from "../../credentials-form/types/shema";
import type { InsertFormProps } from "./validation-form";
import type { Schema } from "./shema";
import { zodResolver } from "@hookform/resolvers/zod";
import { styles } from "./styles";
import { css } from "@styled-system/css";
import Input from "./inputs/factory";

function ValidationForm<T extends Schema>({
    inputsData,
    schema,
    onSubmit,
    children,
}: InsertFormProps<T>) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<InferData<T>>({
        resolver: zodResolver(schema),
    });

    const handleForm = (data: InferData<T>) => onSubmit(data);

    const { form, input, actions } = styles;

    return (
        <form
            onSubmit={handleSubmit(handleForm)}
            className={css(form)}
        >
        {inputsData.map((row, rowIndex) => (
            <div
                key={rowIndex}
                className={css(styles.row)}
            >
            {row.map(i =>
                Input({
                    input: i,
                    styles: input,
                    register,
                    error: errors[i.name],
                }),
            )}
            </div>
            ))}
            <div className={css(actions)}>
                {children}
            </div>
        </form>
    );
}

export default ValidationForm;
