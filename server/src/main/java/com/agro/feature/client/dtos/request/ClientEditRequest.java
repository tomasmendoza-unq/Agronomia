package com.agro.feature.client.dtos.request;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

@JsonTypeInfo(use = JsonTypeInfo.Id.DEDUCTION)
@JsonSubTypes({
        @JsonSubTypes.Type(NaturalPersonEditRequest.class),
        @JsonSubTypes.Type(RazonSocialEditRequest.class)
})
public sealed interface ClientEditRequest permits NaturalPersonEditRequest, RazonSocialEditRequest {
}
