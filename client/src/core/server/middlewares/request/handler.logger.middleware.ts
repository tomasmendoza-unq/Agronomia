import { type AxiosInstance } from "axios";
import handlerSuccessLoggerService from "../../services/request/handler-success-logger.service";
import handlerFailLoggerService from "../../services/request/handler-fail-logger";

function handlerLoggerMiddleware(http: AxiosInstance) {
    http.interceptors.request.use(
        (request) => {
            handlerSuccessLoggerService(request);
            return request;
        },
        (error: unknown) => {
            handlerFailLoggerService(error);
            return Promise.reject(error);
        }
    )
}

export default handlerLoggerMiddleware;