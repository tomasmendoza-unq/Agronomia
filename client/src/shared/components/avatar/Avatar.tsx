import { Link } from "react-router";
import { avatarRole, avatarStyle, avatarText } from "./style";
import type { User } from "@/shared/domain/user/user";
import { InitialsName } from "./components/initialsName/InitialsName";

interface AvatarProps {
    avatar: User;
    to: string;
}

const Avatar = ({ avatar, to }: AvatarProps) => {
    const fullName = `${avatar.name} ${avatar.surname}`.trim();
    const role = avatar.role
        .toLowerCase()
        .replace(
            /(^|_)(\w)/g,
            (_, __, letter: string) => ` ${letter.toUpperCase()}`,
        )
        .trim();

    return (
        <Link
            to={to}
            aria-label={`Perfil de ${fullName}, ${role}`}
            title={fullName}
            className={avatarStyle}
        >
            <InitialsName
                fullName={fullName}
                size="md"
            />
            <span className={avatarText}>
                <span className={avatarRole}>[{role}]</span>
            </span>
        </Link>
    );
};

export default Avatar;
