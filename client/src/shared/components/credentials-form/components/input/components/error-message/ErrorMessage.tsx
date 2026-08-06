import { css } from "@styled-system/css/css";
import { styles } from "./styles";

interface ErrorMessageProps {
    message: string
}

const ErrorMessage = ({message}: ErrorMessageProps) => {

    const { container, text } = styles;
    return (
        <div className = {css(container)}>
            <span className = {css(text)}>{message}</span>
        </div>
    )
}

export default ErrorMessage;