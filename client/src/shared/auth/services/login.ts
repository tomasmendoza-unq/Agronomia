import type { User } from "@/shared/domain/user/user";
import type { Credentials } from "../types/credentials";
import http from "@/core/server/http-client";

async function login(credentials: Credentials): Promise<User> {
    const response = await http.post<User>('api/v1/login', credentials);
    return response.data;
}

export default login;