package com.agro.feature.client.dtos.request;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        include = JsonTypeInfo.As.PROPERTY,
        property = "type"
)
@JsonSubTypes({
        @JsonSubTypes.Type(
                value = NaturalPersonRequest.class,
                name = "NATURAL_PERSON"
        ),
        @JsonSubTypes.Type(
                value = RazonSocialRequest.class,
                name = "RAZON_SOCIAL"
        )
})
public sealed interface ClientRequest permits NaturalPersonRequest, RazonSocialRequest{
}
