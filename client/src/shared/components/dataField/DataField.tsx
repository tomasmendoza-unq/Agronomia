import type { ReactNode } from "react";
import { fieldContainer, labelStyle, valueStyle } from "./styles";

interface DataFieldProps {
    label: string;
    value: ReactNode;
}

const DataField = ({ label, value }: DataFieldProps) => (
    <div className={fieldContainer}>
        <dt className={labelStyle}>{label}</dt>
        <dd className={valueStyle}>{value}</dd>
    </div>
);

export default DataField;
