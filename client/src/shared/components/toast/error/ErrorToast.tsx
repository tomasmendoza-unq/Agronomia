import ToastContainer from "../components/toast-container/ToastContainer";
import ToastHeader from "../components/toast-title/ToastTitle";
import errorIcon from "@/assets/toast/error icon.svg";
import ToastMessage from "../components/toast-message/ToastMessage";
import useActive from "@/shared/hooks/use-active";
import type { AnclaLink } from "../types/ancla-link";
import { css } from "@styled-system/css/css";
import { token } from "@styled-system/tokens";

type ErrorToastProps = {
    link?: AnclaLink
    message: string
    onClose: () => void
}

const ErrorToast = ({message, link, onClose}: ErrorToastProps) => {

    const {isActive, onActive} = useActive();

    function handleActive() {
        onActive();
        onClose();
    }

    return (
        <ToastContainer bg = {css.raw({ bg: token("colors.greenColor")})} isActive = {isActive}>
            <ToastHeader 
                title = "Error" 
                icon = {errorIcon} 
                onActive = {handleActive}
            />
            <ToastMessage message = {message} />
            {link && <a href = {link.route}>{link.linkDescription}</a>}
        </ToastContainer>
    )
}

export default ErrorToast;