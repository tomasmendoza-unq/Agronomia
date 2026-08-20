import type { User } from "@/shared/domain/user/user"
import { Outlet } from "react-router"
import type { linkNavbar } from "../navbar/types/link";
import { authLayout, bodyWrapper } from "./styles";
import NavBar from "../navbar/Navbar";
import Brand from "../brand/Brand";
import Avatar from "./components/avatar/Avatar";
import Breadcrumb from "./components/breadcrumb/Breadcrumb";

interface MainContainerProps {
    links: linkNavbar[];
    avatarTo: string;
    user: User
}

const MainContainer = ({links, user, avatarTo}: MainContainerProps) => {
    return (
        <main className={authLayout}>
            <NavBar
                brand={<Brand companyLogo={user.companyLogo} />}
                avatar={
                    <Avatar
                        avatar={user}
                        to={avatarTo}
                />
                }
                links={links}
            />
            <div className={bodyWrapper}>
                <Breadcrumb />
                <Outlet />
            </div>
        </main>
    )
}

export default MainContainer;