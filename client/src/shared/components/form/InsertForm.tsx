import type { InsertFormProps } from "./insert-form";
import Input from "./types/select-input";
import { styles } from "./styles";
import { css } from "@styled-system/css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { InferData, Schema } from "../credentials-form/types/shema";
import Spinner from "../spinner/Spinner";

function InsertForm<T extends Schema>({
    inputsData,
    isLoading,
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
            {isLoading ? (
                <div
                    className={css({
                        display: "flex",
                        justifyContent: "center",
                        py: "8",
                    })}
                >
                    <Spinner size="md" />
                </div>
            ) : (
                <>
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
                    </div>
                </>
            )}
        </form>
    );
}

export default InsertForm;
