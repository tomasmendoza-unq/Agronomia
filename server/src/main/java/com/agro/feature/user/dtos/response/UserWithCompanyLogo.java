package com.agro.feature.user.dtos.response;

import com.agro.feature.user.domain.User;
import com.agro.shared.entities.rol.Role;
import org.jspecify.annotations.Nullable;

public record UserWithCompanyLogo(
        Long id,
        String name,
        String surname,
        Role role,
        String email,
        String companyLogo
) {
    public static @Nullable UserWithCompanyLogo fromModel(User user) {
        return  new UserWithCompanyLogo(
                user.getId(),
                user.getName(),
                user.getSurname(),
                user.getRole(),
                user.getEmail(),
                user.getLogo()
        );
    }
}
