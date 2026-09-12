package com.agro.core.handlers.model;

import com.agro.shared.valueObjects.cuit.CuitDuplicatedException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class DuplicatedCuitHandler extends BuisnessHandlerException<CuitDuplicatedException>{
    @Override
    protected HttpStatus status() {
        return HttpStatus.CONFLICT;
    }

    @Override
    protected String message() {
        return "El cuit se encuentra repetido ";
    }

    @Override
    protected String title() {
        return "Cuit repetido";
    }
}
