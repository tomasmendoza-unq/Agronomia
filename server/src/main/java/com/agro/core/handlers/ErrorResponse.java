package com.agro.core.handlers;

public record ErrorResponse(
        String field,
        String message
) {
}
