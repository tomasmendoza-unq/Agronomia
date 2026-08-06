package com.agro.feature.auth.dtos.response;

public record AuthResponse(
        String name,
        String email,
        String role,
        Long id
) {
}
