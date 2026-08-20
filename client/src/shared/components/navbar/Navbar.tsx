import { item, navBar, navBarList, selectedItem, wrapLogo } from "./styles";
import { Link } from "react-router";
import type { linkNavbar } from "./types/link";
import useSelect from "@/shared/hooks/use-selected-active";

const NavBar = ({
    avatar,
    brand,
    links,
}: {
    avatar: React.ReactNode;
    brand: React.ReactNode;
    links: linkNavbar[];
}) => {

    const {onActive, isActive} = useSelect();

    return (
        <nav className={navBar}>
            <div className={wrapLogo}>{brand}</div>
            <ul className={navBarList}>
                {links.map((link) => (
                    <li key={link.name}>
                        <Link 
                            to={link.path} 
                            className={isActive(link.name) ? selectedItem : item}
                            onClick={() => onActive(link.name)}
                            >
                                {link.name}
                        </Link>
                    </li>
                ))}
                <li>{avatar}</li>
            </ul>
        </nav>
    );
};

export default NavBar;
