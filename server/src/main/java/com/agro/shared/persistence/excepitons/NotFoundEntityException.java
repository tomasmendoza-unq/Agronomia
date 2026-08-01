package com.agro.shared.persistence.excepitons;

public class NotFoundEntityException extends  RuntimeException {
    public NotFoundEntityException(String message) {
        super(message);
    }
}
