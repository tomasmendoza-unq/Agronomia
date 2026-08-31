package com.agro.feature.client.services.impl;

import com.agro.feature.client.domain.Client;
import com.agro.feature.client.persistence.daos.ClientDAO;
import com.agro.feature.client.services.ClientService;
import com.agro.shared.valueObjects.cuit.CuitException;
import jakarta.transaction.Transactional;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class ClientServiceImpl implements ClientService {

    private ClientDAO dao;

    public ClientServiceImpl(ClientDAO dao) {
        this.dao = dao;
    }

    @Override
    public Client save(Client client) {
        try {
            return dao.saveAndFlush(client);
        }
        catch(DataIntegrityViolationException e) {
            throw new CuitException("El cuit " + client.getCuit() + "ya se encuentra registrado");
        }
    }
}
