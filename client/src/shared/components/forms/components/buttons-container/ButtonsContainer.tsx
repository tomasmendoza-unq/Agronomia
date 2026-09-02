
import { css } from "@styled-system/css";
import type { ButtonData } from "../../simple-form/types/button/credentials-button";
import { token } from "@styled-system/tokens";
import Button from "../button/Button";

const actions = css({
    width: "90%",
    height: "20%",
    minHeight: "38px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "0.75rem",
});

export interface CancelButton {
    onSubmit: () => void
}

interface ButtonsContainerProps {
    buttonData: ButtonData
    cancelOption?: CancelButton
}

const ButtonsContainer = ({buttonData, cancelOption}: ButtonsContainerProps) => {
    return (
        <div className={actions}>
        <Button
            type="submit"
            fullWidth
            color={token("colors.primaryColor")}
            hoverColor={token("colors.primaryColorHover")}
            form="validation-form"
        >
            {buttonData.text}
        </Button>
        {cancelOption && 
            <Button
                form="validation-form"
                fullWidth
                color={token("colors.primaryColor")}
                hoverColor={token("colors.primaryColorHover")}
                onClick={cancelOption.onSubmit}
            >
                    Cancelar
            </Button>
        }
        </div>
    )
}

export default ButtonsContainer;