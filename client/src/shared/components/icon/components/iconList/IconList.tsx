import { styles } from "./styles";
import type { IconListProps } from "./types/iconList.t";

export function IconList({ title, items }: IconListProps) {
    const { iconGroup, sectionTitle, iconDetail, icon } = styles();

    return (
        <section className={iconGroup}>
            <h4 className={sectionTitle}>{title}</h4>
            {items.map(({ icon: Icon, value, fallback }, index) => (
                <div
                    className={iconDetail}
                    key={index}
                >
                    <Icon className={icon} />
                    <span>{value || fallback}</span>
                </div>
            ))}
        </section>
    );
}
