package com.agro.feature.user.dtos.request;


import com.agro.feature.user.domain.User;
import com.agro.feature.user.domain.valueObjects.EmailValue;
import com.agro.shared.entities.rol.Role;
import jakarta.validation.constraints.NotBlank;

public record UserRequest(
        @NotBlank
        String name,
        @NotBlank
        String rol,
        @NotBlank
        String email,
        @NotBlank
        Long id_company
) {
    public User toModel() {
        return User.builder()
                .name(name)
                .email(new EmailValue(email))
                .role(Role.valueOf(rol))
                .build();
    }
}
