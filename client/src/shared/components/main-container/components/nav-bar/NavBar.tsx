import { useEffect, useState } from "react";
import useSelect from "@/shared/hooks/use-selected-active";
import type { linkNavbar } from "../../../../routes/link";
import {
    drawer,
    drawerAvatar,
    drawerContent,
    drawerList,
    item,
    menuButton,
    mobileOnly,
    navBar,
    navBarList,
    overlay,
    selectedItem,
    wrapLogo,
} from "./styles";
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
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") setIsMenuOpen(false);
        };

        window.addEventListener("keydown", closeOnEscape);
        return () => window.removeEventListener("keydown", closeOnEscape);
    }, []);

    const selectLink = (name: linkNavbar["name"]) => {
        onActive(name);
        setIsMenuOpen(false);
    };

    return (
        <>
            <nav className={navBar} aria-label="Navegación principal">
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
                <button
                    type="button"
                    className={menuButton}
                    aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                    onClick={() => setIsMenuOpen((open) => !open)}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d={isMenuOpen ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"} />
                    </svg>
                </button>
            </nav>

            {isMenuOpen && (
                <div className={mobileOnly}>
                    <button
                        type="button"
                        className={overlay}
                        aria-label="Cerrar menú de navegación"
                        onClick={() => setIsMenuOpen(false)}
                    />
                    <aside id="mobile-navigation" className={drawer} aria-label="Menú de navegación">
                        <div className={drawerContent}>
                            <div className={wrapLogo}>{brand}</div>
                            <ul className={drawerList}>
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.path}
                                            className={isActive(link.name) ? selectedItem : item}
                                            onClick={() => selectLink(link.name)}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className={drawerAvatar}>{avatar}</div>
                        </div>
                    </aside>
                </div>
            )}
        </>
    );
};

export default NavBar;
