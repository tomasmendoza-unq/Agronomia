package com.agro.feature.auth.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record AuthRequest(
        @Email @NotNull @NotBlank String email,
        @NotNull @NotBlank String password
) {
}
