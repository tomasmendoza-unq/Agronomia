import { AxiosError, type AxiosInstance } from "axios";
import handlerSuccessLoggerService from "../../services/response/handler-success-logger.service";
import handlerFailLoggerService from "../../services/response/handler-fail-logger";
import type { ErrorResponse } from "../../types/error-response";
import logger from "../../logs/logger";

function handlerLoggerMiddleware(http: AxiosInstance) {
    http.interceptors.response.use(
        (response) => {
            handlerSuccessLoggerService(response);
            return response;
        },
        (error: AxiosError<ErrorResponse>) => {
            if(error.response) handlerFailLoggerService(error.response);
            else logger.uknow(error.status);
            return error;
        }
    )
}

export default handlerLoggerMiddleware;