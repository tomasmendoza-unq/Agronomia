import http from "@/core/server/http-client";
import type { TablePaginator } from "@/shared/types/table/Table";

import { MAIN } from "@/core/server/urls/main";
import type { User } from "@/shared/domain/user/user";

const USERS_PATH = `${MAIN}/user`;

async function getUsers(): Promise<TablePaginator<User>> {
    const response = await http.get<TablePaginator<User>>(USERS_PATH);
    return response.data;
}

export default getUsers;
