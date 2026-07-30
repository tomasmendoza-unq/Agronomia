import { type AxiosResponse } from "axios";
import type { ErrorResponse } from "../../types/error-response";
import logger from "../../logs/logger";

const isDev = import.meta.env.DEV 

function handlerFailLoggerService(response: AxiosResponse<ErrorResponse>) {
    if (isDev) {
        logger.error({ data: response.data });
    }
    else {
        logger.error({ data: response.data });
    }
}

export default handlerFailLoggerService;