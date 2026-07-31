import type { ErrorCause } from "../types/error-cause";
import type { ErrorResponse } from "../types/error-response";

const logger = {
    success: <T>(debug: SuccessType<T>) => 
        console.info(
            '[SUCESS]' + ' ' + isField(debug.status), 
            debug.message, 
            debug.data, 
            isField(debug.path), 
            isField(debug.status)
        ),
    error: (error: ErrorType) => 
        console.error(
            '[ERROR]' + ' ' + isField(error.status),
            error.message,
            isField(error.data.id), 
            isField(error.data.path), 
            isField(error.data.cause), 
            isField(error.status),
        ),
    uknow: (status?: number) =>
        console.error(
            '[ERROR]' + ' ' + isField(status),
            'Hubo un problema inesperado'
        ),
}

type ErrorType = {
    message: string
    data: ErrorResponse, 
    status?: number
}

type SuccessType<T> = {
    data: T, 
    message: string
    status?: number, 
    path?: string
}

const isField = (field?: number | string | ErrorCause) => field ? field : '';

export default logger;