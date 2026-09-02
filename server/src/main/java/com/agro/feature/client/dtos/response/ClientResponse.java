package com.agro.feature.client.dtos.response;

import com.agro.feature.client.dtos.ClientType;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        include = JsonTypeInfo.As.PROPERTY,
        property = "type"
)
@JsonSubTypes({
        @JsonSubTypes.Type(
                value = NaturalPersonResponse.class,
                name = "NATURAL_PERSON"
        ),
        @JsonSubTypes.Type(
                value = RazonSocialResponse.class,
                name = "RAZON_SOCIAL"
        )
})
public sealed interface ClientResponse permits NaturalPersonResponse, RazonSocialResponse {
    Long id();
    ClientType type();
}
