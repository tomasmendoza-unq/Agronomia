package com.agro.feature.provider.dtos.request;

import com.agro.feature.provider.domain.Provider;
import com.agro.feature.provider.domain.Traveler;
import com.agro.shared.annotations.constraints.ValidPhone;
import jakarta.validation.constraints.AssertTrue;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record ProviderEditRequestDTO(
        @NotNull
        Long id,

        @NotBlank
        @ValidPhone
        String phoneNumber,

        String travelerName,
        String travelerPhoneNumber
) {

    @AssertTrue(message = "Si completa un dato del viajante, debe completar también el otro.")
    public boolean isTravelerDataConsistent() {
        boolean hasName = travelerName != null && !travelerName.isBlank();
        boolean hasPhone = travelerPhoneNumber != null && !travelerPhoneNumber.isBlank();

        if (!hasName && !hasPhone) {
            return true;
        }

        return hasName && hasPhone;
    }


    public Provider toModel() {
        Traveler traveler = (travelerName != null && !travelerName.isBlank())
                ? Traveler.builder()
                .fullName(travelerName)
                .phoneNumber(travelerPhoneNumber)
                .build()
                : null;

        Provider model = new Provider (phoneNumber, traveler);

        model.setId(id);

        return model;
    }
}
