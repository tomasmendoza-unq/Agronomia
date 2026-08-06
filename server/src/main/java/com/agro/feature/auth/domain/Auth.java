package com.agro.feature.auth.domain;

import com.agro.shared.entities.rol.Role;

public record Auth(
        String name,
        String email,
        Role role,
        String token,
        Long id,
        String companyLogo
) {
}
