package com.agro.shared.exceptions.dto;

public record ErrorMotive(
        String field,
        String motive
) {}