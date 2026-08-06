import WrapLogo from "@/shared/components/wrapLogo/WrapLogo";

const Brand = ({ companyLogo }: { companyLogo: string }) => {
    return (
        <WrapLogo
            img={companyLogo}
        />
    );
};

export default Brand;
