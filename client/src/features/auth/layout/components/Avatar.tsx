import { Link } from "react-router";
import { avatarStyle } from "./style";
import { ADMIN_ROUTES } from "@/core/routes/admin";
import type { User } from "@/shared/domain/user/user";

const Avatar = ({ avatar }: { avatar: User }) => {
    const fullName = `${avatar.name} ${avatar.surname}`.trim();
    const initials =
        `${avatar.name[0] ?? ""}${avatar.surname[0] ?? ""}`.toUpperCase();

    return (
        <Link
            to={`${ADMIN_ROUTES.CONFIGURATION}`}
            aria-label={`${fullName} avatar`}
            title={fullName}
            style={avatarStyle}
        >
            {initials}
        </Link>
    );
};

export default Avatar;
