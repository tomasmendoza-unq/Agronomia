import type { User } from "@/shared/domain/user/user";
import type { Credentials } from "../types/credentials";
import http from "@/core/server/http-client";
import { LOGIN_PATH } from "@/core/server/urls/login";

async function login(credentials: Credentials): Promise<User> {
    const response = await http.post<User>(LOGIN_PATH, credentials);
    return response.data;
}

export default login;