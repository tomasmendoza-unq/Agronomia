import type { InputData } from "@/shared/types/input/input";
import TextInput from "../../input/text/TextInput";
import SelectInput from "../../input/select/SelectInput";

const Input = (input: InputData) => {
    return 'options' in input ? 
        <SelectInput input = {input} key = {input.id} /> : 
        <TextInput input = {input} key = {input.id} />
}

export default Input;
