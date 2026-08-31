import type { IconProps } from "../../types/IconProps";

export const SearchIcon = ({ className }: IconProps) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
    >
        <circle
            cx="11"
            cy="11"
            r="8"
        />
        <path d="m21 21-4.35-4.35" />
    </svg>
);
