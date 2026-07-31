const ConfigPanel = ({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) => (
    <section>
        <h2>{title}</h2>
        {children}
    </section>
);

export default ConfigPanel;
