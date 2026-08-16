import ToastContainer from "../components/toast-container/ToastContainer";
import ToastHeader from "../components/toast-title/ToastTitle";
import ToastMessage from "../components/toast-message/ToastMessage";
import successIcon from "@/assets/toast/success icon.svg";
import type { AnclaLink } from "../types/ancla-link";
import useActive from "@/shared/hooks/use-active";
import { css } from "@styled-system/css/css";
import { token } from "@styled-system/tokens";

type SuccessToastProps = {
    link?: AnclaLink;
    message: string;
    onClose: () => void;
};

const SuccessToast = ({ message, link, onClose }: SuccessToastProps) => {
    const { isActive, onActive } = useActive();

    function handleActive() {
        onActive();
        onClose();
    }

    return (
        <ToastContainer
            color={css.raw({ bg: token("colors.success") })}
            isActive={isActive}
        >
            <ToastHeader
                title="Hecho"
                icon={successIcon}
                onActive={handleActive}
            />
            <ToastMessage message={message} />
            {link && <a href={link.route}>{link.linkDescription}</a>}
        </ToastContainer>
    );
};

export default SuccessToast;
