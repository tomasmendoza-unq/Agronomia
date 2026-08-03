package com.agro.feature.user.dtos.response;

import com.agro.feature.user.domain.User;
import org.jspecify.annotations.Nullable;

public record UserResponseSimple(
        String name,
        String role,
        String email

) {
    public static @Nullable UserResponseSimple fromModel(User user) {
        return new UserResponseSimple(
                user.getName(),
                user.getEmail(),
                user.getRole().toString()
        );
    }
}
