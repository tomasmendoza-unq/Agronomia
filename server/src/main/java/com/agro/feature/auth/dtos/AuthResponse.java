package com.agro.feature.auth.dtos;

public record AuthResponse(
        String name,
        String email,
        Long id
) {
}
