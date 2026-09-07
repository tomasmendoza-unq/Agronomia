package com.agro.feature.client.dtos.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record RazonSocialEditRequest(
        String address,
        @NotBlank @NotNull String locate,
        @NotBlank @NotNull String province
) implements ClientEditRequest {
}
