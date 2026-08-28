package com.agro.feature.provider.service.impl;

import com.agro.feature.provider.contracts.ProviderDataService;
import com.agro.feature.provider.domain.Provider;
import com.agro.feature.provider.persistence.ProviderDAO;
import com.agro.feature.provider.service.ProviderService;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class ProviderServiceImpl implements ProviderService, ProviderDataService {

    private final ProviderDAO providerDAO;

    public ProviderServiceImpl(ProviderDAO providerDAO) {
        this.providerDAO = providerDAO;
    }

    @Override
    public List<Provider> getProviders() {
        return providerDAO.findAll();
    }
}
