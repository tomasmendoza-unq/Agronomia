import type { InternalAxiosRequestConfig } from "axios";
import logger from "../../logs/logger";

const isDev = import.meta.env.DEV 

function handlerFailLoggerService(request: InternalAxiosRequestConfig) {
    if (isDev) {
        logger.error({ data: request.data });
    }
    else {
        logger.error({ data: request.data });
    }
}

export default handlerFailLoggerService;