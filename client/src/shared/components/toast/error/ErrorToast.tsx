import type { SystemStyleObject } from "@styled-system/types";
import ToastContainer from "../components/toast-container/ToastContainer";
import ToastHeader from "../components/toast-title/ToastTitle";
import errorIcon from "@/assets/toast/error icon.svg";
import ToastMessage from "../components/toast-message/ToastMessage";
import useActive from "@/shared/hooks/use-active";
import type { AnclaLink } from "../types/ancla-link";

type ErrorToastProps = {
    link?: AnclaLink
    message: string
    styles: SystemStyleObject
    onClose: () => void
}

const ErrorToast = ({styles, message, link, onClose}: ErrorToastProps) => {

    const {isActive, onActive} = useActive();

    function handleActive() {
        onActive();
        onClose();
    }

    return (
        <ToastContainer bg = {styles} isActive = {isActive}>
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