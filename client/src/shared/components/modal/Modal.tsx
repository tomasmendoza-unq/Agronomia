import { useEffect, type ReactNode } from "react";
import { overlay, modal, body } from "./styles";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        document.addEventListener("keydown", handleEscape);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className={overlay}
            onClick={onClose}
        >
            <div
                className={modal}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={body}>{children}</div>
            </div>
        </div>
    );
};

export default Modal;
