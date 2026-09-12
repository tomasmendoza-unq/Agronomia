package com.agro.core.handlers.model;

import com.agro.shared.valueObjects.email.EmailDuplicatedException;
import org.springframework.http.HttpStatus;

public class EmailDuplicatedHandler extends BuisnessHandlerException<EmailDuplicatedException>{
    @Override
    protected HttpStatus status() {
        return HttpStatus.CONFLICT;
    }

    @Override
    protected String message() {
        return "El email ya se encuentra registrado";
    }

    @Override
    protected String title() {
        return "Email repetido";
    }
}
