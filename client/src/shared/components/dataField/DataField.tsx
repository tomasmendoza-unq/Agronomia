import type { ReactNode } from "react";
import { fieldContainer, labelStyle, valueStyle } from "./styles";

interface DataFieldProps {
    label: string;
    value: ReactNode;
    labelClassName?: string;
    className?: string;
    valueClassName?: string;
}

const DataField = ({
    label,
    value,
    className,
    labelClassName = labelStyle,
    valueClassName = valueStyle,
}: DataFieldProps) => (
    <div className={className ?? fieldContainer}>
        <dt className={labelClassName}>{label}</dt>
        <dd className={valueClassName}>{value}</dd>
    </div>
);

export default DataField;
