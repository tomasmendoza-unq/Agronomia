
import { css } from "@styled-system/css";
import type { ButtonData } from "../../simple-form/types/button/credentials-button";
import Button from "@/shared/components/button/Button";
import { token } from "@styled-system/tokens";

const actions = css({
    width: "90%",
    height: "20%",
    minHeight: "38px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "0.75rem",
});

interface ButtonsContainerProps {
    buttonData: ButtonData
    haveCancelOption: boolean
}

const ButtonsContainer = ({buttonData, haveCancelOption}: ButtonsContainerProps) => {
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
        {haveCancelOption && 
            <Button
                form="validation-form"
                fullWidth
                color={token("colors.primaryColor")}
                hoverColor={token("colors.primaryColorHover")}>
                    Cancelar
            </Button>
        }
        </div>
    )
}

export default ButtonsContainer;