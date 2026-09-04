import { wrap, wrapLabel, wrapLogo } from "./styles";

const WrapLogo = ({ img, label }: { img: string; label?: string }) => {
    return (
        <div className={wrap}>
            <img
                src={img}
                alt={`${label} logo`}
                className={wrapLogo}
            />
            <span className={wrapLabel}>{label}</span>
        </div>
    );
};

export default WrapLogo;
