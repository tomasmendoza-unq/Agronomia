import type { AxiosInstance } from "axios";
import { getToken } from "../../services/jwt/jwt";


function handlerAuthenticationMiddleware(axios: AxiosInstance) {
    axios.interceptors.request.use(
        (request) => {
            request.headers.setAuthorization(`Bearer ${getToken()}`);
            return request;
        },
        (error) => Promise.reject(error)
    )
}

export default handlerAuthenticationMiddleware;