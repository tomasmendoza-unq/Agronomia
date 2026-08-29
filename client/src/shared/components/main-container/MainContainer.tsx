import type { User } from "@/shared/domain/user/user";
import { Outlet } from "react-router";
import type { linkNavbar } from "../../../core/auth/layout/components/protected-routes/link";
import { authLayout, bodyWrapper } from "./styles";
import Brand from "../brand/Brand";
import Avatar from "../avatar/Avatar";
import Breadcrumb from "./components/breadcrumb/Breadcrumb";
import NavBar from "./components/nav-bar/NavBar";

interface MainContainerProps {
    links: linkNavbar[];
    avatarTo: string;
    user: User;
}

const MainContainer = ({ links, user, avatarTo }: MainContainerProps) => {
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
    );
};

export default MainContainer;
