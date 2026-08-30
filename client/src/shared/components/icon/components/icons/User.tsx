import type { IconProps } from "../../types/IconProps";

export const UserIcon = ({ className }: IconProps) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
    >
        <path d="M20 21a8 8 0 0 0-16 0" />
        <circle
            cx="12"
            cy="7"
            r="4"
        />
    </svg>
);
