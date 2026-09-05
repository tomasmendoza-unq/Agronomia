package com.agro.shared.dtos.error;

import com.agro.shared.entities.errorMotives.ErrorMotive;

import java.util.Date;
import java.util.UUID;

public record RestBuisnessErrorResponse(
        String title,
        String message,
        String path,
        CauseError cause,
        ErrorMotive motive,
        String id,
        Date timestamp
) {
    public RestBuisnessErrorResponse(String title, String message, String path, CauseError cause, ErrorMotive motive) {
        this(title, message, path, cause, motive, UUID.randomUUID().toString(), new Date());
    }
}