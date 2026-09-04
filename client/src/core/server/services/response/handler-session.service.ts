import type { AxiosResponse } from "axios";
import { setToken } from "../jwt/jwt";

function handlerAuthenticateService(response: AxiosResponse) {
    const authorization = response.headers.authorization;
    const token = authorization?.replace(/^Bearer\s+/i, "");

    if (token) {
        setToken(token);
    }
}

export default handlerAuthenticateService;
