package com.agro.feature.client.dtos.request;

import com.agro.shared.annotations.constraints.ValidPhone;
import jakarta.validation.constraints.Email;

public record NaturalPersonEditRequest(
        @Email String email,
        @ValidPhone String phoneNumber,
        String address,
        String locate,
        String province
) implements ClientEditRequest {
}
