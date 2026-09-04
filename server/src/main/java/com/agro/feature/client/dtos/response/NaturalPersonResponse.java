package com.agro.feature.client.dtos.response;

import com.agro.feature.client.dtos.ClientType;

public record NaturalPersonResponse(
        Long id,
        String name,
        String surname,
        String phone,
        String email,
        String cuit,
        String address,
        String location,
        String province
) implements ClientResponse{
    @Override
    public ClientType type() {
        return ClientType.NATURAL_PERSON;
    }
}
