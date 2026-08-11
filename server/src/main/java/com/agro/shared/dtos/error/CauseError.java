package com.agro.shared.dtos.error;

public enum CauseError {
    INTERNAL_SERVER_ERROR("INTERNAL_SERVER_ERROR"),
    INVALID_CREDENTIALS("INVALID_CREDENTIALS"),
    BUSINESS_RULE_VIOLATION("BUSINESS_RULE_VIOLATION"),
    INVALID_TOKEN("INVALID_TOKEN");

    private String cause;

    CauseError(String cause) {
        this.cause = cause;
    }

    String getCause() {
        return cause;
    }
}
