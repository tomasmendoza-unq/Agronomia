import type { ErrorResponse } from "@/core/server/types/error-response";
import type { AxiosError, AxiosInstance } from "axios";
import handlerErrorServices from "../../services/response/handler-error.service";

function handlerErrorMiddleware(http: AxiosInstance) {
    http.interceptors.response.use(
        (response) => response,
        (error: AxiosError<ErrorResponse>) => 
            error.response ? handlerErrorServices(error) : Promise.reject(error) 
    )
}

export default handlerErrorMiddleware;