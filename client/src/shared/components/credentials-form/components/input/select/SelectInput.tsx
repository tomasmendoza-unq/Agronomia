import type { SelectInputData } from "@/shared/types/input/input";

interface SelectInputProps {
    input: SelectInputData
}

const SelectInput = ({input}: SelectInputProps) => {
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

export default SelectInput;