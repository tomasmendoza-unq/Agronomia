package com.agro.shared.data.impl;

import com.agro.feature.company.domain.Company;
import com.agro.feature.company.service.CompanyService;
import com.agro.shared.data.DataSeeder;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Component
@Profile("dev")
public class DataSeederImpl implements DataSeeder {

    private final CompanyService companyService;

    public DataSeederImpl(CompanyService companyService) {
        this.companyService = companyService;
    }

    @Override
    public void run(String... args) throws Exception {
        Company company = Company.builder()
                .name("AgroTech")
                .legalName("AgroTech S.A.")
                .cuit("30-12345678-9")
                .logo("https://res.cloudinary.com/dvkvlpq07/image/upload/v1785440325/logo_tfzoil.jpg")
                .build();
        companyService.save(company);
    }
}
