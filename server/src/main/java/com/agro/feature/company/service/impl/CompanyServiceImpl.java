package com.agro.feature.company.service.impl;

import com.agro.feature.company.contracts.CompanyDataService;
import com.agro.feature.company.domain.Company;
import com.agro.feature.company.persistence.daos.CompanyDAO;
import com.agro.feature.company.service.CompanyService;
import com.agro.shared.persistence.excepitons.NotFoundEntityException;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class CompanyServiceImpl implements CompanyService, CompanyDataService {

    private final CompanyDAO dao;

    public CompanyServiceImpl(CompanyDAO dao) {
        this.dao = dao;
    }

    @Override
    public Company getCompanyById(Long idCompany) {
        return dao.findById(idCompany).orElseThrow(() -> new NotFoundEntityException("Entidad no encontrada"));
    }

    @Override
    public String getCompanyLogoByUser(Long userId) {
        return dao.findByUser(userId);
    }

    @Override
    public Company save(Company company) {
        return dao.save(company);
    }
}
