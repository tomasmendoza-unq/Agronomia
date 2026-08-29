import type { IconProps } from "../../icon/types/IconProps";

export interface IconListProps {
    title: string;
    items: IconItem[];
}

interface IconItem {
    icon: React.ComponentType<IconProps>;
    value: string;
    fallback: string;
}
