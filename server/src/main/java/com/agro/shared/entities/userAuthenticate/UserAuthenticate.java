package com.agro.shared.entities.userAuthenticate;

import com.agro.shared.entities.rol.Role;

public record UserAuthenticate(
        String email,
        String password,
        Role role,
        String name,
        String logo,
        Long id
) {
}
