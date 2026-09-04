import { styles } from "./styles";

interface IconTextProps {
    icon: React.ComponentType<{ className?: string }>;
    value: string;
    fallback?: string;
}

export function IconText({ icon: Icon, value, fallback }: IconTextProps) {
    const { iconDetail, icon } = styles();

    return (
        <div className={iconDetail}>
            <Icon className={icon} />
            <span>{value || fallback}</span>
        </div>
    );
}
