import "./styles.css";
import closeIcon from "@/assets/toast/close-item.svg";
import { css } from "@styled-system/css";
import type { SystemStyleObject } from "@styled-system/types";
import type { ReactNode } from "react";

type ToastHeaderProps = {
    title: string;
    icon: string | ReactNode;
    color: SystemStyleObject;
    onActive: () => void;
};

const ToastHeader = ({ title, icon, color, onActive }: ToastHeaderProps) => {
    return (
        <div className="toast-header-container">
            <section className="toast-header-container_title">
                <figure>
                    {typeof icon === "string" ? (
                        <img
                            src={icon}
                            alt="Icono para la modal"
                        />
                    ) : (
                        icon
                    )}
                </figure>
                <p className={css(color)}>{title}</p>
            </section>
            <section className="toast-header-container_close">
                <figure>
                    <img
                        src={closeIcon}
                        alt="Icono para cerrar la modal"
                        onClick={onActive}
                    />
                </figure>
            </section>
        </div>
    );
};

export default ToastHeader;
