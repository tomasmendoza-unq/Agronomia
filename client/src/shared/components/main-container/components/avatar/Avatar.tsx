// shared/components/avatar/Avatar.tsx
import { Link } from "react-router";
import { avatarInitials, avatarRole, avatarStyle, avatarText } from "./style";
import type { User } from "@/shared/domain/user/user";

interface AvatarProps {
    avatar: User;
    to: string;
}

const Avatar = ({ avatar, to }: AvatarProps) => {
    const fullName = `${avatar.name} ${avatar.surname}`.trim();
    const initials =
        `${avatar.name[0] ?? ""}${avatar.surname[0] ?? ""}`.toUpperCase();
    const role = avatar.role
        .toLowerCase()
        .replace(/(^|_)(\w)/g, (_, __, letter: string) => ` ${letter.toUpperCase()}`)
        .trim();

    return (
        <Link
            to={to}
            aria-label={`Perfil de ${fullName}, ${role}`}
            title={fullName}
            className={avatarStyle}
        >
            <span className={avatarInitials}>{initials}</span>
            <span className={avatarText}>
                <span>{fullName}</span>
                <span className={avatarRole}>[{role}]</span>
            </span>
        </Link>
    );
};

export default Avatar;
