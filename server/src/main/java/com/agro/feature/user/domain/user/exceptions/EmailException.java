package com.agro.feature.user.domain.user.exceptions;

public class EmailException extends RuntimeException{
    public EmailException() {
        super("El mail del usuario es invalido");
    }
}
