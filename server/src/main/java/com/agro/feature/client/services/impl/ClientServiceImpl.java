package com.agro.feature.client.services.impl;

import com.agro.feature.client.domain.Client;
import com.agro.feature.client.persistence.daos.ClientDAO;
import com.agro.feature.client.services.ClientService;
import com.agro.feature.user.contracts.UserDataService;
import com.agro.feature.user.domain.User;
import com.agro.shared.valueObjects.cuit.CuitException;
import jakarta.transaction.Transactional;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class ClientServiceImpl implements ClientService {

    private ClientDAO dao;
    private UserDataService userDataService;

    public ClientServiceImpl(ClientDAO dao, UserDataService userDataService) {
        this.dao = dao;
        this.userDataService = userDataService;
    }

    @Override
    public Client save(Client client, Long userId) {
        try {
            User user = userDataService.getUserById(userId);
            client.setCompanyId(user.getCompany().getId());
            return dao.saveAndFlush(client);
        }
        catch(DataIntegrityViolationException e) {
            throw new CuitException("El cuit " + client.getCuit() + " ya se encuentra registrado");
        }
    }

    @Override
    public Page<Client> getClients(int page, int size, Long userId, String name) {
        User user = userDataService.getUserById(userId);
        return dao.searchClientByCompanyId(user.getCompany().getId(),name, PageRequest.of(page, size));
    }
}
