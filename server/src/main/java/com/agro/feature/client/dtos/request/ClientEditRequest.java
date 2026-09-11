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
                value = NaturalPersonEditRequest.class,
                name = "NATURAL_PERSON"
        ),
        @JsonSubTypes.Type(
                value = RazonSocialEditRequest.class,
                name = "RAZON_SOCIAL"
        )
})
public sealed interface ClientEditRequest permits NaturalPersonEditRequest, RazonSocialEditRequest {
}
