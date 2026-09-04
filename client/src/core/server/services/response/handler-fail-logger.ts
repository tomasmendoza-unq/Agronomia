import axios from "axios";
import type { ErrorResponse } from "../../types/error-response";
import logger from "../../logs/logger";

const isDev = import.meta.env.DEV 

function handlerFailLoggerService(error: unknown) {
    if (isDev && axios.isAxiosError<ErrorResponse>(error) && error.response) {
        logger.error({ 
            data: error.response.data,
            message: 'Respuesta fallida'
        });
    }
    else {
        logger.uknow();
    }
}

export default handlerFailLoggerService;