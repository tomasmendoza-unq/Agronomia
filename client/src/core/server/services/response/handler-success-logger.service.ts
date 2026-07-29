import type { AxiosResponse } from "axios";
import logger from "../../logs/logger";

const isDev = import.meta.env.DEV 

function handlerSuccessLoggerService(response: AxiosResponse) {
    if(isDev) logger.debug(response.data, response.status);
}

export default handlerSuccessLoggerService;