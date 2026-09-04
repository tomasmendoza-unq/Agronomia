package com.agro.feature.auth.dtos.response;

public record AuthResponse(
        String name,
        String surname,
        String email,
        String role,
        Long id,
        String companyLogo
) {
}
