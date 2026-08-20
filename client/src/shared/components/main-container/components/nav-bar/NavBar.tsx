import type { linkNavbar } from "@/shared/components/navbar/types/link";
import { item, navBar, navBarList, wrapLogo } from "./styles";
import { Link } from "react-router";

const NavBar = ({
    avatar,
    brand,
    links,
}: {
    avatar: React.ReactNode;
    brand: React.ReactNode;
    links: linkNavbar[];
}) => {
    return (
        <nav className={navBar}>
            <div className={wrapLogo}>{brand}</div>
            <ul className={navBarList}>
                {links.map((link) => (
                    <li key={link.name}>
                        <Link to={link.path} className={item}>{link.name}</Link>
                    </li>
                ))}
                <li>{avatar}</li>
            </ul>
        </nav>
    );
};

export default NavBar;
