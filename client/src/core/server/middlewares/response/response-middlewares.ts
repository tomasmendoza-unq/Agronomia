import type { AxiosInstance } from "axios";
import handlerErrorMiddleware from "./handler-error.middeware";
import handlerLoggerMiddleware from "./handler-logger.middleware";
import handlerAuthenticateMiddleware from "./handle-session.middleware";

function setResponseMiddlewares(http: AxiosInstance) {
    handlerLoggerMiddleware(http);
    handlerErrorMiddleware(http);
    handlerAuthenticateMiddleware(http);
}

export default setResponseMiddlewares;