const WrapLogo = ({ img, label }: { img: string; label: string }) => {
    return (
        <div className="wrap-logo">
            <img
                src={img}
                alt={`${label} logo`}
                className="wrap-logo__logo"
            />
            <span className="wrap-logo__name">{label}</span>
        </div>
    );
};

export default WrapLogo;
