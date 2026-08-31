package com.agro.feature.client.dtos.request;

import com.agro.feature.client.domain.Client;
import com.agro.feature.client.domain.NaturalPerson;
import com.agro.feature.client.domain.RazonSocial;
import com.agro.feature.client.dtos.ClientMapper;
import com.agro.feature.client.dtos.response.ClientResponse;
import org.springframework.stereotype.Component;

@Component
public class ClientFactory {
    public Client createToRequest(ClientRequest request) {

        return switch (request) {
            case NaturalPersonRequest r ->
                    ClientMapper.INSTANCE.dtoToModel(r);

            case RazonSocialRequest r ->
                    ClientMapper.INSTANCE.dtoToModel(r);
        };
    }

    public ClientResponse createToResponse(Client client) {

        return switch (client) {
            case NaturalPerson r ->
                    ClientMapper.INSTANCE.modelToDto(r);

            case RazonSocial r ->
                    ClientMapper.INSTANCE.modelToDto(r);
            default -> throw new IllegalStateException("Unexpected value: " + client);
        };
    }
}
