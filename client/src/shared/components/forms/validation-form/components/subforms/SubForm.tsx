import { css } from "@styled-system/css";
import type { SubFormProps } from "./sub-form";
import Input from "../../inputs/factory";
import type { Schema } from "../../shema";

function SubForm<T extends Schema>({inputs, title, register, rowStyles, inputStyles, formStyles, errors}: SubFormProps<T>) {
        
    return (
        <div className={css(formStyles)}>
            {title && <p>{title}</p>}
            {inputs.map((row, rowIndex) => (
                <div key={rowIndex} className={css(rowStyles)}>
                    {row.map(i =>
                        Input({
                            input: i,
                            styles: inputStyles,
                            register,
                            error: errors[i.name],
                        }),
                    )}
                </div>
            ))}
        </div>
    )
}

export default SubForm;