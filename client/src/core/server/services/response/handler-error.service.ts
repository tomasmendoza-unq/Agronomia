import type { AxiosError } from "axios";
import type { ErrorResponse } from "../../types/error-response";
import { HttpError } from "../../errors/http-error";

function handlerErrorServices(error: AxiosError<ErrorResponse>): Promise<HttpError> {
    const { data, status } = error.response!
    const apiError = new HttpError(data, status);
    return Promise.reject(apiError);
}

export default handlerErrorServices;