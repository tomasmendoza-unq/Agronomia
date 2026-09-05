package com.agro.shared.exceptions;

import com.agro.shared.entities.errorMotives.ErrorMotive;

public class BusinessException extends RuntimeException {

    private ErrorMotive motive;

    public BusinessException(String message, ErrorMotive motive) {
        super(message);
        this.motive = motive;
    }

    public ErrorMotive getMotive() {
        return motive;
    }
}