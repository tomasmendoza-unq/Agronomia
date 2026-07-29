import type { AxiosInstance } from "axios";
import handlerErrorMiddleware from "./handler-error.middeware";
import handlerLoggerMiddleware from "./handler-logger.middleware";

function setResponseMiddlewares(http: AxiosInstance) {
    handlerErrorMiddleware(http);
    handlerLoggerMiddleware(http);
}

export default setResponseMiddlewares;