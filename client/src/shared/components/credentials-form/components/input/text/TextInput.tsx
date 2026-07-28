import type { InputData } from "@/shared/types/input/input";

interface TextInputProps {
    input: InputData
}

const TextInput = ({input}: TextInputProps) => {
    return (
        <div>
            <label htmlFor = {input.name}></label>
            <span>{input.title}</span>
            <input 
                type = {input.type} 
                name = {input.name} 
                id = {input.name} 
                required 
            />
        </div>
    )
} 

export default TextInput;