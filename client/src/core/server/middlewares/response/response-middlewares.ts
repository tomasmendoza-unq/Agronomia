import type { AxiosInstance } from "axios";
import handlerErrorMiddleware from "./handler-error.middeware";

function setResponseMiddlewares(http: AxiosInstance) {
    handlerErrorMiddleware(http);
}

export default setResponseMiddlewares;