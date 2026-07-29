import { AxiosError, type AxiosInstance } from "axios";
import logger from "../../logs/logger";
import handlerSuccessLoggerService from "../../services/request/handler-success-logger.service";
import handlerFailLoggerService from "../../services/request/handler-fail-logger";

function handlerLoggerMiddleware(http: AxiosInstance) {
    http.interceptors.request.use(
        (request) => {
            handlerSuccessLoggerService(request);
            return request;
        },
        (error) => {
            if(error instanceof AxiosError) handlerFailLoggerService(error.request);
            else logger.uknow(error.status);
            return error;
        }
    )
}

export default handlerLoggerMiddleware;