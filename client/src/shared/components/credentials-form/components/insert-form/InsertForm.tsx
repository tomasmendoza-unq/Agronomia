import type { InsertFormProps } from "./insert-form";
import Input from "./types/select-input";
import { styles } from "./styles";
import { css } from "@styled-system/css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { InferData, Schema } from "../../types/shema";
import { token } from "@styled-system/tokens";
import Button from "@/shared/components/button/Button";

function InsertForm<T extends Schema>({
    inputsData,
    buttonData,
    schema,
    onSubmit,
}: InsertFormProps<T>) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<InferData<T>>({
        resolver: zodResolver(schema),
    });

    const handleForm = (data: InferData<T>) => onSubmit(data);

    const { form, input } = styles;

    return (
        <form
            onSubmit={handleSubmit(handleForm)}
            className={css(form)}
        >
            {inputsData.map((i) => Input(i, input, register, errors[i.name]))}
            <Button
                type="submit"
                fullWidth
                color={token("colors.primaryColor")}
                hoverColor={token("colors.primaryColorHover")}
            >
                {buttonData.text}
            </Button>
        </form>
    );
}

export default InsertForm;
