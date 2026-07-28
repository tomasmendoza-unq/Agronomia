import type { LinkData } from "@/shared/types/link/Link"
import { Link } from "react-router"

interface FooterProps {
    links: LinkData[]
}

const Footer = ({links}: FooterProps) => {
    return (
        <footer>
            {links.map(link => <NavegationLink link = {link} key = {link.id} />)}
        </footer>
    )
}

interface NavegationLinkProps {
    link: LinkData
}

const NavegationLink = ({link}: NavegationLinkProps) => {
    return (
        <div>
            <p>{link.question}</p>
            <Link to = {link.path}>{link.title}</Link>
        </div>
    )
}

export default Footer;