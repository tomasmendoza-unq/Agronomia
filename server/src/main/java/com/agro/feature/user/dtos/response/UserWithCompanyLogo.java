package com.agro.feature.user.dtos.response;

import com.agro.feature.user.domain.User;
import org.jspecify.annotations.Nullable;

public record UserWithCompanyLogo(
        Long id,
        String name,
        String surname,
        String role,
        String email,
        String companyLogo
) {
    public static @Nullable UserWithCompanyLogo fromModel(User user) {
        return  new UserWithCompanyLogo(
                user.getId(),
                user.getName(),
                user.getSurname(),
                user.getNameRol(),
                user.getEmail(),
                user.getLogo()
        );
    }
}
