import type { TextInputData } from "@/shared/types/input/input";
import { css } from "@styled-system/css";
import type { SystemStyleObject } from "@styled-system/types";
import { styles } from "./styles";

interface TextInputProps {
    input: TextInputData
    inputStyles: SystemStyleObject
}

const TextInput = ({input, inputStyles}: TextInputProps) => {
    return (
        <div className = {css(styles.container)}>
            <label htmlFor = {input.name} className = {css(styles.label)}>
                <span>{input.title}</span>
            </label>
            <input 
                className = {css(inputStyles)}
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