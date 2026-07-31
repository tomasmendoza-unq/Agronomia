import type { CompanyData } from "@/features/company/types/CompanyData.t";
import { navBar, navBarList, wrapLogo } from "./styles";
import { Link } from "react-router";
import WrapLogo from "@/shared/components/wrapLogo/WrapLogo";

const NavBar = ({
    companyData,
    links,
}: {
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
                    <li
                        key={link.name}
                        className="navbar__item"
                    >
                        <Link
                            to={link.path}
                            className="navbar__link"
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
