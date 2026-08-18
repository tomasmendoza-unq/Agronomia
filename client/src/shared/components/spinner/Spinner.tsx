import { cx } from "@styled-system/css";
import { spinner } from "./style";

interface SpinnerProps {
    size?: "sm" | "md" | "lg";
    centered?: boolean;
    className?: string;
}

const Spinner = ({
    size = "md",
    centered = false,
    className,
}: SpinnerProps) => {
    return (
        <div
            className={cx(spinner({ size, centered }), className)}
            role="status"
            aria-label="Cargando"
        />
    );
};

export default Spinner;
