import { Link } from "react-router";
import { avatarStyle } from "./style";
import { ADMIN_ROUTES } from "@/core/routes/admin";

type AvatarUser = { name?: string; surnames?: string; email?: string };

const Avatar = ({ avatar }: { avatar: AvatarUser }) => {
    const fullName = avatar
        ? `${avatar.name ?? ""} ${avatar.surnames ?? ""}`.trim() ||
          (avatar.email ? avatar.email.split("@")[0] : "")
        : "";
    const parts = fullName.trim().split(/\s+/).filter(Boolean);

    const initials =
        parts.length === 0
            ? ""
            : parts.length === 1
              ? parts[0].slice(0, 2).toUpperCase()
              : (parts[0][0] + parts[1][0]).toUpperCase();

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
