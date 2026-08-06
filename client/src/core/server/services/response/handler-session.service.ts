import type { AxiosResponse } from "axios";
import { TOKEN_KEY } from "../../types/token-key";

function handlerAuthenticateService(response: AxiosResponse) {
    const token = response.headers.authorization
    localStorage.setItem(TOKEN_KEY, token);
}

export default handlerAuthenticateService;