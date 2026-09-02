export type ErrorCause = 'INTERNAL_SERVER_ERROR';

export const ErrorCause = {
    INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
    INVALID_CREDENTIALS: 'INVALID_CREDENTIALS',
} as const;

export type ErrorCauseType = typeof ErrorCause[keyof typeof ErrorCause];