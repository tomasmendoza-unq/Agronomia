package com.agro.feature.company.service;

import com.agro.feature.company.domain.Company;

public interface CompanyService {
    Company save(Company company);
    Company getCompanyById(Long idCompany);
}
