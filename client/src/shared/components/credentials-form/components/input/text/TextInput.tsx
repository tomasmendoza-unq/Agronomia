import type { TextInputData } from "@/shared/types/input/input";

interface TextInputProps {
    input: TextInputData
}

const TextInput = ({input}: TextInputProps) => {
    return (
        <div>
            <label htmlFor = {input.name}></label>
            <span>{input.title}</span>
            <input 
                type = {input.type} 
                name = {input.name} 
                placeholder = {input.placeholder}
                id = {input.name} 
                required 
            />
        </div>
    )
} 

export default TextInput;