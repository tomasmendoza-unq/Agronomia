package com.agro.shared.valueObjects.cuit;

import com.agro.shared.exceptions.ConflictException;

public class CuitDuplicatedException extends ConflictException {
    public CuitDuplicatedException(String cuit) {
        super("El cuit " + cuit + " ya está registrado");
    }
}
