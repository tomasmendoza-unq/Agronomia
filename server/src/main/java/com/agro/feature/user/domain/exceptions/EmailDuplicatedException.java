package com.agro.feature.user.domain.exceptions;

import com.agro.shared.exceptions.BusinessException;

public class EmailDuplicatedException extends BusinessException {
    public EmailDuplicatedException(String message) {
        super(message);
    }
}
