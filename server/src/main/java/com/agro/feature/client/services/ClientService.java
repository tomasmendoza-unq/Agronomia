package com.agro.feature.client.services;

import com.agro.feature.client.domain.Client;
import org.springframework.data.domain.Page;

public interface ClientService {
    Client save(Client client, Long userId);
    Page<Client> getClients(int page, int size, Long userId, String name);
}
