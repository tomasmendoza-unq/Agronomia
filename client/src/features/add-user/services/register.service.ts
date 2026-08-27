import http from "@/core/server/http-client";
import { REGISTER_PATH } from "@/core/server/urls/register";
import type { RegisterRequest } from "../api/dto/RegisterRequest";
import type { User } from "@/shared/domain/user/user";

async function register(user: RegisterRequest): Promise<User> {
    const response = await http.post<User>(REGISTER_PATH, user);
    return response.data;
}

export default register;
