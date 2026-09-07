package com.agro.feature.client.dtos.request;

import com.agro.shared.annotations.constraints.ValidPhone;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record NaturalPersonEditRequest(
        @Email String email,
        @NotBlank @NotNull @ValidPhone String phoneNumber,
        String address,
        @NotBlank @NotNull String locate,
        @NotBlank @NotNull String province
) implements ClientEditRequest {
}
