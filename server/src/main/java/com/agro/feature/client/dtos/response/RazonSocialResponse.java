package com.agro.feature.client.dtos.response;

import com.agro.feature.client.dtos.ClientType;

public record RazonSocialResponse(
        Long id,
        String razon,
        String associateName,
        String associateSurname,
        String associatePhone,
        String associateEmail,
        String cuit,
        String address,
        String location,
        String province
)
        implements ClientResponse {

    @Override
    public ClientType type() {
        return ClientType.RAZON_SOCIAL;
    }
}
