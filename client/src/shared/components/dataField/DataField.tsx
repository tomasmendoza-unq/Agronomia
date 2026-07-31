import type { ReactNode } from "react";

const DataField = ({ label, value }: { label: string; value: ReactNode }) => (
    <div>
        <dt>{label}</dt>
        <dd>{value}</dd>
    </div>
);

export default DataField;
