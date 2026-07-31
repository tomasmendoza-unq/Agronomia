import type { TablePaginator } from "@/shared/types/table/Table";
import type { User } from "../types/user";
import { useState } from "react";

const mockUsers: TablePaginator<User> = {
    headers: ["Nombre", "Email", "Rol"],
    rows: [
        {
            id: 1,
            data: {
                id: "1",
                name: "Carla Núñez",
                email: "carla.nunez@mail.com",
                rol: "Administrador",
            },
        },
        {
            id: 2,
            data: {
                id: "2",
                name: "Marcelo Gómez",
                email: "marcelo.gomez@mail.com",
                rol: "Dueño",
            },
        },
        {
            id: 3,
            data: {
                id: "3",
                name: "Julieta Ramos",
                email: "julieta.ramos@mail.com",
                rol: "Vendedor",
            },
        },
        {
            id: 4,
            data: {
                id: "4",
                name: "Diego Fernández",
                email: "diego.fernandez@mail.com",
                rol: "Facturacion",
            },
        },
    ],
    page: 0,
    size: 10,
    totalElements: 4,
    totalPages: 1,
    last: true,
};

export const UseGetUsers = () => {
    const [users, setUsers] = useState<TablePaginator<User> | null>(null);

    const getUsers = async () => {
        setUsers(mockUsers);
    };

    return { users, getUsers };
};
