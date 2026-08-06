import type { AxiosResponse } from "axios";
import { TOKEN_KEY } from "../../types/token-key";

function handlerAuthenticateService(response: AxiosResponse) {
    const authorization = response.headers.authorization;
    const token = authorization?.replace(/^Bearer\s+/i, "");

    if (token) {
        localStorage.setItem(TOKEN_KEY, token);
    }
}

export default handlerAuthenticateService;
