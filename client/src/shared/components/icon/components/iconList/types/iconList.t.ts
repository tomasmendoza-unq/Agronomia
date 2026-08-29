import type { IconProps } from "../../../types/IconProps";

export interface IconListProps {
    title: string;
    items: IconItem[];
}

interface IconItem {
    icon: React.ComponentType<IconProps>;
    value: string;
    fallback: string;
}
