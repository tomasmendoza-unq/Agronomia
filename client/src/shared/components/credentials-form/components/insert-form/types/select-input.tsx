import type { InputData } from "../../../types/input/credentials-input";
import TextInput from "../../input/text/TextInput";
import SelectInput from "../../input/select/SelectInput";
import type { SystemStyleObject } from "@styled-system/types";
import type { DeepRequired, FieldError, FieldErrorsImpl, Merge, UseFormRegister } from "react-hook-form";
import type { InferData, Schema } from "../../../types/shema";
import type { output } from "zod";

function Input<T extends Schema>(
    input: InputData, 
    styles: SystemStyleObject, 
    register: UseFormRegister<InferData<T>>, 
    error: FieldError | undefined | Merge<FieldError, FieldErrorsImpl<DeepRequired<output<T>>>>
) {
    return 'options' in input ? 
        <SelectInput 
            input = {input} 
            key = {input.id} 
            styles = {styles} 
            error = {error}
            register = {register}
        /> 
            : 
        <TextInput 
            input = {input} 
            key = {input.id} 
            inputStyles = {styles}
            error = {error} 
            register = {register}
        />
}

export default Input;
