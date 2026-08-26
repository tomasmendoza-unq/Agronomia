import type { User } from "@/shared/domain/user/user";
import type { Credentials } from "../types/Credentials";

function logout(user: Credentials): Promise<User> {}

export default logout;
