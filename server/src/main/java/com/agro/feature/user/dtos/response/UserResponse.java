package com.agro.feature.user.dtos.response;

public record UserResponse(
        Long id,
        String name,
        String role,
        String email
) {
}
