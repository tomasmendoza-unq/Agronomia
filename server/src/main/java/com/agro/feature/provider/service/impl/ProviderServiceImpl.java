package com.agro.feature.provider.service.impl;

import com.agro.feature.provider.contracts.ProviderDataService;
import com.agro.feature.provider.domain.Provider;
import com.agro.feature.provider.persistence.ProviderDAO;
import com.agro.feature.provider.service.ProviderService;
import com.agro.feature.user.contracts.UserDataService;
import com.agro.feature.user.domain.User;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class ProviderServiceImpl implements ProviderService, ProviderDataService {

    private final ProviderDAO providerDAO;

    private final UserDataService userDataService;

    public ProviderServiceImpl(ProviderDAO providerDAO, UserDataService userDataService) {
        this.providerDAO = providerDAO;
        this.userDataService = userDataService;
    }

    @Override
    public Page<Provider> getProviders(int page, int size, Long userId) {
        User user = userDataService.getUserById(userId);
        return providerDAO.findAllByCompanyId(user.getCompany().getId(), PageRequest.of(page, size));
    }

    @Override
    public Provider save(Provider provider) {
        return providerDAO.save(provider);
    }
}
