import type { ErrorCause } from "./error-cause";
import type { ErrorField } from "./error-field";
import type { ErrorMotive } from "./error-motive";

export interface ErrorResponse {
    id: string;
    title: string;
    message: string;
    path: string;
    timestamp: Date;
    cause: ErrorCause;
    fields?: ErrorField[]
    motive?: ErrorMotive
}