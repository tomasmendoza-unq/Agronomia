// shared/components/avatar/Avatar.tsx
import { Link } from "react-router";
import { avatarStyle } from "./style";
import type { User } from "@/shared/domain/user/user";

interface AvatarProps {
    avatar: User;
    to: string;
}

const Avatar = ({ avatar, to }: AvatarProps) => {
    const fullName = `${avatar.name} ${avatar.surname}`.trim();
    const initials =
        `${avatar.name[0] ?? ""}${avatar.surname[0] ?? ""}`.toUpperCase();

    return (
        <Link
            to={to}
            aria-label={`${fullName} avatar`}
            title={fullName}
            style={avatarStyle}
        >
            {initials}
        </Link>
    );
};

export default Avatar;
