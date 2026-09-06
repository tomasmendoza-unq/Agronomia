package com.agro.shared.valueObjects.email;

import com.agro.shared.exceptions.ConflictException;

public class EmailDuplicatedException extends ConflictException {
    public EmailDuplicatedException(String email) {
        super("El mail " + email + " ya se encuentra registrado");
    }
}
