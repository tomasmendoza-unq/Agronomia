package com.agro.feature.provider.dtos.request;

import com.agro.feature.provider.domain.Provider;
import com.agro.feature.provider.domain.Traveler;
import jakarta.validation.constraints.NotBlank;

public record ProviderRequestDTO(
        @NotBlank
        String legalName,
        @NotBlank
        String cuit,
        String tradeName,
        @NotBlank
        String phoneNumber,
        String travelerName,
        String travelerPhoneNumber
) {
    public Provider toModel() {
        Traveler traveler = (travelerName != null && !travelerName.isBlank())
                ? Traveler.builder()
                .fullName(travelerName)
                .phoneNumber(travelerPhoneNumber)
                .build()
                : null;

        return Provider.builder()
                .legalName(legalName)
                .cuit(cuit)
                .tradeName(tradeName)
                .phoneNumber(phoneNumber)
                .traveler(traveler)
                .build();
    }
}