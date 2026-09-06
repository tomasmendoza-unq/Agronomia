import ToastContainer from "../components/toast-container/ToastContainer";
import ToastHeader from "../components/toast-title/ToastTitle";
import ToastMessage from "../components/toast-message/ToastMessage";
import type { AnclaLink } from "../types/ancla-link";
import useActive from "@/shared/hooks/use-active";
import { css } from "@styled-system/css/css";
import { token } from "@styled-system/tokens";

type SuccessToastProps = {
    title?: string;
    link?: AnclaLink;
    message: string;
    onClose: () => void;
};

const SuccessToast = ({
    title = "Hecho",
    message,
    link,
    onClose,
}: SuccessToastProps) => {
    const { isActive, onActive } = useActive();

    function handleActive() {
        onActive();
        onClose();
    }

    return (
        <ToastContainer
            bg={css.raw({ bg: token("colors.success") })}
            isActive={isActive}
        >
            <ToastHeader
                title={title}
                icon="/mark.svg"
                onActive={handleActive}
                color={css.raw({ color: token("colors.success") })}
            />
            <ToastMessage message={message} />
            {link && <a href={link.route}>{link.linkDescription}</a>}
        </ToastContainer>
    );
};

export default SuccessToast;
