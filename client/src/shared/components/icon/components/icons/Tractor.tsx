import type { IconProps } from "../../types/IconProps";

export const TractorIcon = ({ className }: IconProps) => (
    <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <circle
            cx="16"
            cy="46"
            r="9"
        />
        <circle
            cx="16"
            cy="46"
            r="3"
        />
        <circle
            cx="44"
            cy="50"
            r="6"
        />
        <path d="M20 38h10l4-10h8v14" />
        <path d="M30 28h4" />
        <path d="M34 18v10" />
        <path d="M30 18h8" />
        <rect
            x="38"
            y="30"
            width="10"
            height="10"
            rx="1"
        />
        <path d="M44 30v-4h6" />
    </svg>
);
