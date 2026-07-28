import type { InputData } from "@/shared/types/input/input";
import TextInput from "../../input/text/TextInput";
import SelectInput from "../../input/select/SelectInput";

const Input = (input: InputData) => {
    return 'options' in input ? 
        <SelectInput input = {input} /> : 
        <TextInput input = {input} />
}

export default Input;
