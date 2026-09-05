import { ErrorCause } from "../types/error-cause";
import type { ErrorMotive } from "../types/error-motive";
import type { ErrorResponse } from "../types/error-response";
import type { ErrorSide } from "../types/error-side";

export class HttpError extends Error {
    private data: ErrorResponse;
    private status: number;
    private side: ErrorSide;

    constructor(data: ErrorResponse, status: number) {
        super(data.message);
        this.data = data;
        this.status = status;
        this.side = this.errorSide(status);
    }

    get getCause() {
        return this.data.cause;
    }

    get getTitle() {
        return this.data.title;
    }

    get getMessage() {
        return this.data.message;
    }

    get getStatus() {
        return this.status;
    }

    get getSideError() {
        return this.side;
    }

    get getErrorMotive() {
        return this.data.motive;
    }

    isCause(cause: ErrorCause) {
        return this.data.cause === cause;
    }

    isMotive(cause: ErrorMotive) {
        return this.isCause(ErrorCause.BUSINESS_RULE_VIOLATION) && this.data.motive === cause;
    }

    private errorSide(status: number) {
        if (status >= 500) return "Server";
        else if (status >= 400) return "Client";
        else return "Uknow";
    }
}
