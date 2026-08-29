import { styles } from "./styles";

interface SubSectionProps<T> {
    title: string;
    items: T[];
    renderItem: (item: T, index: number) => React.ReactNode;
}

function SubSection<T>({ title, items, renderItem }: SubSectionProps<T>) {
    const { sectionGroup, sectionTitle } = styles();

    return (
        <section className={sectionGroup}>
            <h4 className={sectionTitle}>{title}</h4>
            {items.map((item, index) => (
                <div key={index}>{renderItem(item, index)}</div>
            ))}
        </section>
    );
}

export default SubSection;
