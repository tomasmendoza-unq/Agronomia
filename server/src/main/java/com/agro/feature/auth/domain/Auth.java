package com.agro.feature.auth.domain;

public record Auth(
        String name,
        String email,
        String token,
        Integer id
) {
}
