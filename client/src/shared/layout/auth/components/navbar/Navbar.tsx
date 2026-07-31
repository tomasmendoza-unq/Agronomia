import type { CompanyData } from "@/features/company/types/CompanyData.t";
import { navBar, navBarList, wrapLogo } from "./styles";
import { Link } from "react-router";
import WrapLogo from "@/shared/components/wrapLogo/WrapLogo";

const NavBar = ({
    // user,
    companyData,
    links,
}: {
    // user: User;
    companyData: CompanyData;
    links: { name: string; path: string }[];
}) => {
    return (
        <nav className={navBar}>
            <div className={wrapLogo}>
                <WrapLogo
                    img={companyData.logo}
                    label={companyData.name}
                />
            </div>
            <ul className={navBarList}>
                {links.map((link) => (
                    <li key={link.name}>
                        <Link to={link.path}>{link.name}</Link>
                    </li>
                ))}
                <li>
                    <WrapLogo
                        img={companyData.logo}
                        label={companyData.name}
                    />
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
