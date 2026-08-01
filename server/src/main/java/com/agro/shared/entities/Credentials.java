package com.agro.shared.entities;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record Credentials(
        @Email @NotNull @NotBlank String email,
        @NotNull @NotBlank String password
) {
}
