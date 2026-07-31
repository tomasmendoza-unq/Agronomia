import { AxiosError } from "axios";
import type { ErrorResponse } from "../../types/error-response";
import logger from "../../logs/logger";

const isDev = import.meta.env.DEV 

function handlerFailLoggerService(uknowError?: unknown, responseError?: AxiosError<ErrorResponse>) {
    if (isDev && responseError && responseError.response ) {
        logger.error({ 
            data: responseError.response.data,
            message: 'Respuesta fallida'
        });
    }
    if(uknowError) {
        logger.uknow();
    }
}

export default handlerFailLoggerService;