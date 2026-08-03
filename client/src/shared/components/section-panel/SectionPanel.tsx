import { body, header, panel, title } from "./styles";

const SectionPanel = ({
    title: titleText,
    children,
    actions,
}: {
    title: string;
    children: React.ReactNode;
    actions?: React.ReactNode;
}) => (
    <section className={panel}>
        <div className={header}>
            <h2 className={title}>{titleText}</h2>
            {actions}
        </div>
        <div className={body}>{children}</div>
    </section>
);

export default SectionPanel;
