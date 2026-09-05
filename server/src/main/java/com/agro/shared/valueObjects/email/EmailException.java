package com.agro.shared.valueObjects.email;

import com.agro.shared.entities.errorMotives.ErrorMotive;
import com.agro.shared.exceptions.BusinessException;

public class EmailException extends BusinessException {
    public EmailException(ErrorMotive motive) {
        super("El mail del usuario es invalido", motive);
    }
}
