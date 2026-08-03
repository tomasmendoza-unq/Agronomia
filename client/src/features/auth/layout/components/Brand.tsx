import type { CompanyData } from "@/features/company/types/CompanyData.t";
import WrapLogo from "@/shared/components/wrapLogo/WrapLogo";

const Brand = ({ companyData }: { companyData: CompanyData }) => {
    return (
        <WrapLogo
            img={companyData.logo}
            label={companyData.name}
        />
    );
};

export default Brand;
