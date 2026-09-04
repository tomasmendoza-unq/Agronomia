import type { AxiosResponse } from "axios";
import logger from "../../logs/logger";

const isDev = import.meta.env.DEV 

function handlerSuccessLoggerService(response: AxiosResponse) {
    if(isDev) logger.success({ 
        data: response.data, 
        status: response.status,
        message: '¡Respuesta éxitosa!' 
    });
}

export default handlerSuccessLoggerService;