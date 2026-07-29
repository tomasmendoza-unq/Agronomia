import { type AxiosResponse } from "axios";
import type { ErrorResponse } from "../../types/error-response";
import logger from "../../logs/logger";

const isDev = import.meta.env.DEV 

function handlerFailLoggerService(response: AxiosResponse<ErrorResponse>) {
    if (isDev) {
        logger.warn(response.data, response.status);
    }
    else {
        logger.error(response.data, response.status);
    }
}

export default handlerFailLoggerService;