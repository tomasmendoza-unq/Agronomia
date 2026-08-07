package com.agro.feature.company.service.impl;

import com.agro.feature.company.contracts.CompanyDataService;
import com.agro.feature.company.domain.Company;
import com.agro.feature.company.persistence.daos.CompanyDAO;
import com.agro.feature.company.service.CompanyService;
import com.agro.shared.persistence.excepitons.NotFoundEntityException;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.function.Supplier;

@Service
@Transactional
public class CompanyServiceImpl implements CompanyService, CompanyDataService {

    private final CompanyDAO dao;

    public CompanyServiceImpl(CompanyDAO dao) {
        this.dao = dao;
    }

    @Override
    public Company getCompanyById(Long idCompany) {
        return execute(() -> dao.findById(idCompany));
    }

    @Override
    public Company getCompanyByUserId(Long idUser) {
        return execute(() -> dao.findByUsers_Id(idUser));
    }

    private Company execute(Supplier<Optional<Company>> query){
        return query.get().orElseThrow(() -> new NotFoundEntityException("Entidad no encontrada"));
    }

    @Override
    public Company save(Company company) {
        return dao.save(company);
    }
}
