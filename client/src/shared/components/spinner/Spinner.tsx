import { cx } from "@styled-system/css";
import { spinner } from "./style";

interface SpinnerProps {
    size?: "sm" | "md" | "lg";
    className?: string;
}

const Spinner = ({ size = "md", className }: SpinnerProps) => {
    return (
        <div
            className={cx(spinner({ size }), className)}
            role="status"
            aria-label="Cargando"
        />
    );
};

export default Spinner;
