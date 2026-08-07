import http from "@/core/server/http-client";

import { USER_ME_PATH } from "@/core/server/urls/users";
import type { User } from "@/shared/domain/user/user";

async function authenticateUser(): Promise<User> {
    const user = await http.get(USER_ME_PATH);
    return user.data;
}

export default authenticateUser;
