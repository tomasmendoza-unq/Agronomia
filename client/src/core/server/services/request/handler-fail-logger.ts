import { AxiosError } from "axios";
import logger from "../../logs/logger";

const isDev = import.meta.env.DEV;

function handlerFailLoggerService(error: unknown) {
    if(isDev && error instanceof AxiosError) {
        logger.error({ 
            data: error.request.data,
            message: 'No se puede enviar la petición'
        });
    }
    else {
        logger.uknow();
    }
}

export default handlerFailLoggerService;