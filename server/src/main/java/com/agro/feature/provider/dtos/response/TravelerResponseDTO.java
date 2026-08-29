package com.agro.feature.provider.dtos.response;

import com.agro.feature.provider.domain.Traveler;

public record TravelerResponseDTO(
        Long id,
        String fullName,
        String phoneNumber
) {
    private static final String NOT_PROVIDED = "No indicado";

    public static TravelerResponseDTO fromModel(Traveler traveler) {
        if (traveler == null) {
            return new TravelerResponseDTO(null, NOT_PROVIDED, NOT_PROVIDED);
        }

        return new TravelerResponseDTO(
                traveler.getId(),
                traveler.getFullName() != null ? traveler.getFullName() : NOT_PROVIDED,
                traveler.getPhoneNumber() != null ? traveler.getPhoneNumber() : NOT_PROVIDED
        );
    }
}