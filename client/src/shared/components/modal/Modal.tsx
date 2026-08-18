import { useEffect, type ReactNode } from "react";
import { css } from "@styled-system/css";
import { modalStyles } from "./styles";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    loading?: boolean;
}

const Modal = ({ isOpen, onClose, children, loading }: ModalProps) => {
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

    const { overlay, modal, body } = modalStyles;

    return (
        <div
            className={css(overlay)}
            onClick={onClose}
        >
            <div
                className={css(modal)}
                onClick={(e) => e.stopPropagation()}
            >
                {loading ? (
                    <p>Cargando...</p>
                ) : (
                    <div className={css(body)}>{children}</div>
                )}
            </div>
        </div>
    );
};

export default Modal;
