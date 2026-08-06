import http from "@/core/server/http-client";
import { getSubject } from "@/core/server/services/jwt/jwt";
import { USER_ME_PATH } from "@/core/server/urls/users";
import type { User } from "@/shared/domain/user/user";

async function authenticateUser(): Promise<User> {
    const id = getSubject();
    const user = await http.get(USER_ME_PATH(id));
    return user.data;
}

export default authenticateUser;