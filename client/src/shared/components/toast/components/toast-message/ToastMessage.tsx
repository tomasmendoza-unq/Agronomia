import { css } from "@styled-system/css";

type ToastMessageProp = {
    message: string
}

const ToastMessage = ({message}: ToastMessageProp) => {
    return (
        <p className = {css({ color: '#E6E6E6', fontSize: '12px'})}>{message}</p>
    )
}

export default ToastMessage;