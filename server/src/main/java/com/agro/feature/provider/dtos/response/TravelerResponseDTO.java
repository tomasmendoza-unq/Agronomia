package com.agro.feature.provider.dtos.response;

import com.agro.feature.provider.domain.Traveler;

public record TravelerResponseDTO(
        Long id,
        String fullName,
        String phoneNumber
) {
    public static TravelerResponseDTO fromModel(Traveler traveler) {
        return new TravelerResponseDTO(
                traveler.getId(),
                traveler.getFullName(),
                traveler.getPhoneNumber()
        );
    }
}
