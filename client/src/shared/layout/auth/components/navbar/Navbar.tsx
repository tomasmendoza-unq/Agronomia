import type { CompanyData } from "@/features/company/types/CompanyData.t";
import { navBar, navBarList, wrapLogo } from "./styles";
import WrapLogo from "../WrapLogo";

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
                        <a
                            href={link.path}
                            className="navbar__link"
                        >
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
