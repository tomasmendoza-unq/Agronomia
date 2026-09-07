import type { IconProps } from "../../types/IconProps";
import { token } from "@styled-system/tokens";

export const SuccessIcon = ({ className }: IconProps) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke={token("colors.success")}
        strokeWidth="1.5"
        aria-hidden="true"
    >
        <circle
            cx="12"
            cy="12"
            r="10"
        />
        <path d="m8 12 2.5 2.5L16 9" />
    </svg>
);
