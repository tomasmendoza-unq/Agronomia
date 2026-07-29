import type { InputData } from "../../../../../types/input/credentials-input";
import TextInput from "../../input/text/TextInput";
import SelectInput from "../../input/select/SelectInput";
import type { SystemStyleObject } from "@styled-system/types";

const Input = (input: InputData, styles: SystemStyleObject) => {
    return 'options' in input ? 
        <SelectInput input = {input} key = {input.id} styles = {styles} /> : 
        <TextInput input = {input} key = {input.id} inputStyles = {styles} />
}

export default Input;
