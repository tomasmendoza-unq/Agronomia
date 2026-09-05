package com.agro.shared.entities.errorMotives;

public enum ErrorMotive {
    DUPLICATE_EMAIL("DUPLICATE_EMAIL"),
    DUPLICATE_CUIT("DUPLICATE_CUIT"),
    CUIT_FORMAT("CUIT_FORMAT"),
    NOT_ARROBA("NOT_ARROBA"),
    NOT_OWNER_COMPANY("NOT_OWNER_COMPANY");

    private String cause;

    ErrorMotive(String cause) {
        this.cause = cause;
    }

    String getCause() {
        return cause;
    }
}
