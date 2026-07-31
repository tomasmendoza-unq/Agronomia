import { useEffect, type ReactNode } from "react";
import { overlay, modal, header, title, closeButton, body } from "./styles";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
}

const Modal = ({ isOpen, onClose, title: titleText, children }: ModalProps) => {
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
                <div className={header}>
                    <h2 className={title}>{titleText}</h2>
                    <button
                        className={closeButton}
                        onClick={onClose}
                        type="button"
                    >
                        ✕
                    </button>
                </div>
                <div className={body}>{children}</div>
            </div>
        </div>
    );
};

export default Modal;
