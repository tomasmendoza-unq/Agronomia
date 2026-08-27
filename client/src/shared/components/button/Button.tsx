import type { ButtonHTMLAttributes, CSSProperties } from "react";
import { css, cx } from "@styled-system/css";
import { buttonShape, fullWidth } from "./button.styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color: string;
    hoverColor: string;
    borderColor?: string;
    textColor?: string;
    textHoverColor?: string;
    fullWidth?: boolean;
}

const Button = ({
    color,
    hoverColor,
    borderColor,
    textColor,
    textHoverColor,
    fullWidth: isFullWidth,
    style,
    className,
    children,
    ...rest
}: ButtonProps) => {
    const colorVars = {
        "--button-bg": color,
        "--button-bg-hover": hoverColor,
        ...(borderColor ? { "--button-border": borderColor } : {}),
        ...(textColor ? { "--button-color": textColor } : {}),
        ...(textHoverColor ? { "--button-color-hover": textHoverColor } : {}),
    } as CSSProperties;

    return (
        <button
            className={cx(
                css(buttonShape),
                isFullWidth && css(fullWidth),
                className,
            )}
            style={{ ...colorVars, ...style }}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
