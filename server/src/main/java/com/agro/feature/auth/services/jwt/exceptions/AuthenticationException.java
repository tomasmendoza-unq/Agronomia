package com.agro.feature.auth.services.jwt.exceptions;

public class AuthenticationException extends RuntimeException {
    public  AuthenticationException(String message) {
        super(message);
    }
}
