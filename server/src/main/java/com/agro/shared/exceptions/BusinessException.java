package com.agro.shared.exceptions;


import com.agro.shared.exceptions.dto.ErrorMotive;

import java.util.List;

public class BusinessException extends RuntimeException {
    private final List<ErrorMotive> motives;

    public BusinessException(String message) {
        this(message, null);
    }

    public BusinessException(String message, List<ErrorMotive> motives) {
        super(message);
        this.motives = motives;
    }

    public List<ErrorMotive> getMotives() {
        return motives;
    }
}