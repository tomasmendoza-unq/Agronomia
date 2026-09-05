
export const ErrorCause = {
    INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
    INVALID_CREDENTIALS: 'INVALID_CREDENTIALS',
    BUSINESS_RULE_VIOLATION: 'BUSINESS_RULE_VIOLATION',
} as const;

export type ErrorCause = typeof ErrorCause[keyof typeof ErrorCause];