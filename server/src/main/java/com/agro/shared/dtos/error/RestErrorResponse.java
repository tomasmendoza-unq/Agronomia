package com.agro.shared.dtos.error;

import java.util.Date;
import java.util.UUID;

public record RestErrorResponse(
        String title,
        String message,
        String path,
        CauseError cause,
        String id,
        Date timestamp
) {
    public RestErrorResponse(String title, String message, String path, CauseError cause) {
        this(title, message, path, cause, UUID.randomUUID().toString(), new Date());
    }
}
