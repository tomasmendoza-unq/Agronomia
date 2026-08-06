import type { AxiosInstance } from "axios";
import handlerAuthenticateService from "../../services/response/handler-session.service";

function handlerAuthenticateMiddleware(axios: AxiosInstance) {
    axios.interceptors.response.use(
        (response) => {
            handlerAuthenticateService(response);
            return response;
        },
        (error) => Promise.reject(error)
    )
}

export default handlerAuthenticateMiddleware;