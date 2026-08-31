package com.agro.feature.client.dtos.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record RazonSocialRequest(
        @NotBlank String businessName,
        @NotBlank String cuit,
        String address,
        @NotBlank String locality,
        @NotBlank String province,
        @NotBlank @NotNull String associateName,
        @NotBlank @NotNull String associateSurname,
        @NotBlank @NotNull String associatePhone,
        @Email String email
) implements ClientRequest {
}
