import { type AxiosInstance } from "axios";
import handlerSuccessLoggerService from "../../services/response/handler-success-logger.service";
import handlerFailLoggerService from "../../services/response/handler-fail-logger";

function handlerLoggerMiddleware(http: AxiosInstance) {
    http.interceptors.response.use(
        (response) => {
            handlerSuccessLoggerService(response);
            return response;
        },
        (error: unknown) => {
            handlerFailLoggerService(error);
            return Promise.reject(error);
        }
    )
}

export default handlerLoggerMiddleware;