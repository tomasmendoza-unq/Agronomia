import { css } from "@styled-system/css";
import CheckInput from "../../validation-form/inputs/check/CheckInput";

interface OptionListProps {
    options: string[]
    onOption: (option: string) => void
}

const styles = css({
    display: "flex",
    justifyContent: "space-around",
    width: "100%"
})

const OptionList = ({options, onOption}: OptionListProps) => {
    return (
        <div className={styles}>
            {options.map(option => 
                <CheckInput 
                    onSubmit={onOption}
                    value={option}
                />
            )}
        </div>
    )
}

export default OptionList;