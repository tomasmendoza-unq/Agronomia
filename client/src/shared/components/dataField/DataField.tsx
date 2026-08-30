import type { ReactNode } from "react";
import { fieldContainer, labelStyle, valueStyle } from "./styles";

interface DataFieldProps {
    label: string;
    value: ReactNode;
    labelClassName?: string;
    valueClassName?: string;
}

const DataField = ({
    label,
    value,
    labelClassName = labelStyle,
    valueClassName = valueStyle,
}: DataFieldProps) => (
    <div className={fieldContainer}>
        <dt className={labelClassName}>{label}</dt>
        <dd className={valueClassName}>{value}</dd>
    </div>
);

export default DataField;
