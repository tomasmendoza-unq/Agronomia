import type { InternalAxiosRequestConfig } from "axios";
import logger from "../../logs/logger";

const isDev = import.meta.env.DEV 

function handlerSuccessLoggerService(request: InternalAxiosRequestConfig) {
    if(isDev) logger.success({ data: request.data, path: request.url });
}

export default handlerSuccessLoggerService;