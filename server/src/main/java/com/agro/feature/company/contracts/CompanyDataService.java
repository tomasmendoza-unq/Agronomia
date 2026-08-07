package com.agro.feature.company.contracts;

import com.agro.feature.company.domain.Company;

public interface CompanyDataService {
    Company getCompanyById(Long idCompany);

    Company getCompanyByUserId(Long idUser);
}
