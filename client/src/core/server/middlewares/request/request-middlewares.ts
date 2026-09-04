import type { AxiosInstance } from "axios";
import handlerLoggerMiddleware from "./handler.logger.middleware";
import handlerAuthenticationMiddleware from "./handler-authentication.middleware";

function setRequestMiddlewares(http: AxiosInstance) {
    handlerLoggerMiddleware(http)
    handlerAuthenticationMiddleware(http);
}

export default setRequestMiddlewares;