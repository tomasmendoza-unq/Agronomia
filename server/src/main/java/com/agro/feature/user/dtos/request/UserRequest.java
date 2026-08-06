package com.agro.feature.user.dtos.request;


import com.agro.feature.user.domain.User;
import com.agro.feature.user.domain.valueObjects.EmailValue;
import com.agro.shared.entities.rol.Role;

public record UserRequest(
        String name,
        String role,
        String email,
        Long id_company
) {
    public User toModel() {
        return User.builder()
                .name(name)
                .email(new EmailValue(email))
                .role(Role.valueOf(role))
                .build();
    }
}
