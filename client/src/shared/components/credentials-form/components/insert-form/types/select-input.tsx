import type { InputData } from "@/shared/types/input/input";
import TextInput from "../../input/text/TextInput";

const Input = (input: InputData) => {
    switch(input.type) {
        case 'email':
            return <TextInput input = {input} />
        case 'password': 
            return <TextInput input = {input} />
        case 'text': 
            return<TextInput input = {input} />
        case 'select': 
            return <SelectInput input = {input} />
    }
}

export default Input;
