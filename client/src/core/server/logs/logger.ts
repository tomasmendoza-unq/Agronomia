import type { ErrorCause } from "../types/error-cause";
import type { ErrorResponse } from "../types/error-response";

const logger = {
    success: <T>(debug: SuccessType<T>) => 
        console.info(
            '[DEBUG]', 'Respuesta recibida correctamente', 
            debug.data, 
            isField(debug.path), 
            isField(debug.status)
        ),
    error: (error: ErrorType) => 
        console.error(
            '[ERROR]', 'Error', 
            isField(error.data.id), 
            isField(error.data.path), 
            isField(error.data.cause), 
            isField(error.status),
        ),
    uknow: (status?: number) =>
        console.error(
            '[ERROR]', 
            'Error ' + 
            isField(status) + 
            ' al recibir la respuesta del servidor'
        ),
}

type ErrorType = {
    data: ErrorResponse, 
    status?: number
}

type SuccessType<T> = {
    data: T, 
    status?: number, 
    path?: string
}

const isField = (field?: number | string | ErrorCause) => field ? field : '';

export default logger;