import { MAIN } from "./main";

export const ADD_CLIENT = `${MAIN}/client/add`;
export const CLIENT_PATH = `${MAIN}/client`;
export const PUT_CLIENT_PATH = `${MAIN}/client`;
export const CLIENT_PATH_BY_ID = (clientId: number) =>
    `${CLIENT_PATH}/${clientId}`;
