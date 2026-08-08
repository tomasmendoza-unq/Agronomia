import http from "@/core/server/http-client";
import type { TablePaginator } from "@/shared/types/table/Table";
import type { User } from "@/features/admin/types/User";
import { USERS_PATH } from "@/core/server/urls/users";

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
