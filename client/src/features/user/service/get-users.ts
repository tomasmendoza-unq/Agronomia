import http from "@/core/server/http-client";
import type { TablePaginator } from "@/shared/types/table/Table";
import { MAIN } from "@/core/server/urls/main";
import type { User } from "@/features/admin/types/User";

const USERS_PATH = `${MAIN}/user`;

async function getUsersService(
    page: number = 0,
    size: number = 10,
): Promise<TablePaginator<User>> {
    const response = await http.get<TablePaginator<User>>(USERS_PATH, {
        params: {
            page,
            size,
        },
    });
    return response.data;
}

export default getUsersService;
