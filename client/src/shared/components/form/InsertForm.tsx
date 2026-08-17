import type { InsertFormProps } from "./insert-form";
import Input from "./types/select-input";
import { styles } from "./styles";
import { css } from "@styled-system/css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { token } from "@styled-system/tokens";
import Button from "@/shared/components/button/Button";
import type { InferData, Schema } from "../credentials-form/types/shema";

function InsertForm<T extends Schema>({
    inputsData,
    buttonData,
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
                    {row.map((i) =>
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
                <Button
                    type="submit"
                    fullWidth
                    color={token("colors.primaryColor")}
                    hoverColor={token("colors.primaryColorHover")}
                >
                    {buttonData.text}
                </Button>
            </div>
        </form>
    );
}

export default InsertForm;
