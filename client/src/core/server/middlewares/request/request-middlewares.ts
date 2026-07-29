import type { AxiosInstance } from "axios";
import handlerLoggerMiddleware from "./handler.logger.middleware";

function setRequestMiddlewares(http: AxiosInstance) {
    handlerLoggerMiddleware(http)
}

export default setRequestMiddlewares;