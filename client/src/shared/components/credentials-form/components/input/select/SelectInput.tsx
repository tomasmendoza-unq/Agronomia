import type { SelectInputData } from "../../../types/input/credentials-input";
import { css } from "@styled-system/css";
import type { SystemStyleObject } from "@styled-system/types";

interface SelectInputProps {
    input: SelectInputData;
    styles: SystemStyleObject;
}

const SelectInput = ({ input, styles }: SelectInputProps) => {
    return (
        <div>
            <label htmlFor={input.name}>
                <span>{input.title}</span>
            </label>
            <select
                className={css(styles)}
                name={input.name}
                id={input.name}
                defaultValue=""
                required
            >
                <option
                    value=""
                    disabled
                >
                    Seleccionar {input.title.toLowerCase()}
                </option>
                {input.options.map((opt) => (
                    <option
                        key={opt.id}
                        value={opt.value}
                    >
                        {opt.value}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectInput;
