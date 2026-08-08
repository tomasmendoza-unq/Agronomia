package com.agro.feature.user.dtos.response;

import com.agro.feature.user.domain.User;
import org.jspecify.annotations.Nullable;

public record UserResponseSimple(
        Long id,
        String email,
        String role,
        String name


) {
    public static @Nullable UserResponseSimple fromModel(User user) {
        return new UserResponseSimple(
                user.getId(),
                user.getName() + " " +  user.getSurname(),
                user.getNameRol(),
                user.getEmail()
        );
    }
}
