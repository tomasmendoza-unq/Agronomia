import http from "@/core/server/http-client";
import type { User } from "../types/user";
import { REGISTER_PATH } from "@/core/server/urls/register";
import type { UserRequest } from "../types/userRequest";

async function register(user: UserRequest): Promise<User> {
    const response = await http.post<User>(REGISTER_PATH, user);
    return response.data;
}

export default register;
