package com.agro.shared.entities;

public record UserAuthenticate(
        String email,
        String role,
        Integer id
) {
}
