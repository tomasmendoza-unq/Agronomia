import TextInput from "../components/text/TextInput";
import FileInput from "../components/file/FileInput";
import type { SystemStyleObject } from "@styled-system/types";
import type {
    DeepRequired,
    FieldError,
    FieldErrorsImpl,
    Merge,
    UseFormRegister,
} from "react-hook-form";
import type { output } from "zod";
import type { InferData, Schema } from "../../credentials-form/types/shema";
import SelectInput from "../components/select/SelectInput";
import type { InputData } from "@/shared/types/input/input";

type FieldErrorType<T extends Schema> =
    | FieldError
    | undefined
    | Merge<FieldError, FieldErrorsImpl<DeepRequired<output<T>>>>;

interface RenderInputProps<T extends Schema> {
    input: InputData;
    styles: SystemStyleObject;
    register: UseFormRegister<InferData<T>>;
    error: FieldErrorType<T>;
}

function Input<T extends Schema>({
    input,
    styles,
    register,
    error,
}: RenderInputProps<T>) {
    switch (input.type) {
        case "select":
            return (
                <SelectInput
                    key={input.id}
                    input={input}
                    styles={styles}
                    error={error}
                    register={register}
                />
            );
        case "file":
            return (
                <FileInput
                    key={input.id}
                    input={input}
                    inputStyles={styles}
                    error={error}
                    register={register}
                />
            );
        case "text":
        case "email":
        case "password":
            return (
                <TextInput
                    key={input.id}
                    input={input}
                    inputStyles={styles}
                    error={error}
                    register={register}
                />
            );
    }
}

export default Input;
