package com.agro.feature.user.domain.exceptions;

import com.agro.shared.exceptions.BusinessException;

public class EmailException extends BusinessException {
    public EmailException() {
        super("El mail del usuario es invalido");
    }
}
