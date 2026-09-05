package com.agro.shared.valueObjects.cuit;

import com.agro.shared.entities.errorMotives.ErrorMotive;
import com.agro.shared.exceptions.BusinessException;

public class CuitException extends BusinessException {
    public CuitException(String message, ErrorMotive motive) {
        super(message, motive);
    }
}
