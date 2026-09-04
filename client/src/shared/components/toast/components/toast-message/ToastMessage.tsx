import { css } from "@styled-system/css";
import { token } from "@styled-system/tokens";

type ToastMessageProp = {
    message: string
}

const ToastMessage = ({message}: ToastMessageProp) => {
    return (
        <p className = {css({ color: token("colors.textSubtle"), fontSize: '14px'})}>{message}</p>
    )
}

export default ToastMessage;