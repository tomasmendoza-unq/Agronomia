package com.agro.shared.entities;

public record UserAuthenticate(
        String email,
        String role,
        String name,
        Long id
) {
}
