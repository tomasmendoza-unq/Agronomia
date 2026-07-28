import type { SelectInputData } from "@/shared/types/input/input";
import { css } from "@styled-system/css";
import type { SystemStyleObject } from "@styled-system/types";

interface SelectInputProps {
    input: SelectInputData
    styles: SystemStyleObject
}

const SelectInput = ({input, styles}: SelectInputProps) => {
    return (
        <div>
            <label htmlFor = {input.name}></label>
            <span>{input.title}</span>
            <input 
                className = {css(styles)}
                type = {input.type} 
                name = {input.name} 
                id = {input.name} 
                required 
            />
        </div>
    )
} 

export default SelectInput;