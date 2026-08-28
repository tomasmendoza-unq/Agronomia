package com.agro.feature.provider.dtos.response;

import com.agro.feature.provider.domain.Provider;

public record ProviderResponseDTO(
        Long id,
        String tradeName,
        String legalName,
        String cuit,
        String phoneNumber,
        TravelerResponseDTO traveler
){
    public static ProviderResponseDTO fromModel(Provider provider) {
        return new ProviderResponseDTO(
                provider.getId(),
                provider.getTradeName(),
                provider.getLegalName(),
                provider.getCuit(),
                provider.getPhoneNumber(),
                TravelerResponseDTO.fromModel(provider.getTraveler())
        );
    }
}
