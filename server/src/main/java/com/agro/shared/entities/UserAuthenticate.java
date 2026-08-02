package com.agro.shared.entities;

public record UserAuthenticate(
        String email,
        String password,
        String role,
        String name,
        Long id
) {
}
