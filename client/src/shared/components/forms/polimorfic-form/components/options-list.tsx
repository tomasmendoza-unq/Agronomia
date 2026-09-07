import { css } from "@styled-system/css";
import CheckInput from "../../validation-form/inputs/check/CheckInput";

interface OptionListProps {
    options: string[];
    onOption: (option: string) => void;
    selectedOption?: string;
}

const styles = css({
    display: "flex",
    justifyContent: {
        base: "center",
        md: "start",
    },
    gap: "6%",
    width: "90%",
});

const OptionList = ({ options, onOption, selectedOption }: OptionListProps) => {
    return (
        <div className={styles}>
            {options.map((option) => (
                <CheckInput
                    onSubmit={onOption}
                    value={option}
                    checked={option === selectedOption}
                    key={option}
                />
            ))}
        </div>
    );
};

export default OptionList;
