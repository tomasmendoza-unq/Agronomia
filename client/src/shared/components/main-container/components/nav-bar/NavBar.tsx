import useSelect from "@/shared/hooks/use-selected-active";
import type { linkNavbar } from "../../../../routes/link";
import { item, navBar, navBarList, selectedItem, wrapLogo } from "./styles";
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

    const {isActive, onActive} = useSelect();

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
