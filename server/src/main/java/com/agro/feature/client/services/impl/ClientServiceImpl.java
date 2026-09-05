package com.agro.feature.client.services.impl;

import com.agro.feature.client.domain.Client;
import com.agro.feature.client.persistence.daos.ClientDAO;
import com.agro.feature.client.services.ClientService;
import com.agro.feature.user.contracts.UserDataService;
import com.agro.feature.user.domain.User;
import com.agro.shared.entities.errorMotives.ErrorMotive;
import com.agro.shared.persistence.excepitons.NormaliceText;
import com.agro.shared.valueObjects.cuit.CuitException;
import com.agro.shared.valueObjects.email.EmailException;
import jakarta.transaction.Transactional;
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
        if(dao.existsByCuit_Cuit(client.getCuit())) {
            throw new CuitException("El cuit " + client.getCuit() + " ya se encuentra registrado", ErrorMotive.DUPLICATE_CUIT);
        }
        if(dao.existsByEmail_Email(client.getEmail())) {
            throw new EmailException(ErrorMotive.DUPLICATE_EMAIL);
        }
        User user = userDataService.getUserById(userId);
        client.setCompanyId(user.getCompany().getId());
        return dao.saveAndFlush(client);
    }

    @Override
    public Page<Client> getClients(int page, int size, Long userId, String name) {
        User user = userDataService.getUserById(userId);
        String normaliceSearch = NormaliceText.normalize(name);
        return dao.searchClientByCompanyId(user.getCompany().getId(), normaliceSearch, PageRequest.of(page, size));
    }
}
