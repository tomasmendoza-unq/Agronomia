import type { LinkData } from "../../types/link/Link"
import { Link } from "react-router"
import { styles } from "./styles";
import { css } from "@styled-system/css/css";

interface FooterProps {
    links: LinkData[]
}


const { footer, linkContainer, ancla, textQuestion } = styles;

const Footer = ({links}: FooterProps) => {

    return (
        <footer className = {css(footer)}>
            {links.map(link => <NavegationLink link = {link} key = {link.id} />)}
        </footer>
    )
}

interface NavegationLinkProps {
    link: LinkData
}

const NavegationLink = ({link}: NavegationLinkProps) => {
    return (
        <div className = {css(linkContainer)}>
            <p className = {css(textQuestion)}>{link.question}</p>
            <Link to = {link.path} className = {css(ancla)}>
                {link.title}
            </Link>
        </div>
    )
}

export default Footer;