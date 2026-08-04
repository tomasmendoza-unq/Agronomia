import { css } from "@styled-system/css";

type ToastMessageProp = {
    message: string
}

const ToastMessage = ({message}: ToastMessageProp) => {
    return (
        <p className = {css({ color: '#111', fontSize: '14px'})}>{message}</p>
    )
}

export default ToastMessage;