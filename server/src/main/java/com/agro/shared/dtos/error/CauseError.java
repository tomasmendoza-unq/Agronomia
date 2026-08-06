package com.agro.shared.dtos.error;

public enum CauseError {
    INTERNAL_SERVER_ERROR("INTERNAL_SERVER_ERROR"),
    INVALID_CREDENTIALS("INVALID_CREDENTIALS");

    private String cause;

    CauseError(String cause) {
        this.cause = cause;
    }

    String getCause() {
        return cause;
    }
}
