package com.agro.feature.client.dtos.request;

import com.agro.shared.annotations.constraints.ValidPhone;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record RazonSocialEditRequest(
        @NotBlank @NotNull String associateName,
        @NotBlank @NotNull String associateSurname,
        @NotBlank @NotNull @ValidPhone String associatePhone,
        @Email String email,
        String address,
        @NotBlank @NotNull String locate,
        @NotBlank @NotNull String province
) implements ClientEditRequest {
}
