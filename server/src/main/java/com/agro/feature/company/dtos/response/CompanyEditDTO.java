package com.agro.feature.company.dtos.response;

import com.agro.feature.company.domain.Company;

public record CompanyEditDTO(
        Long id,
        String name,
        String legalName,
        String cuit
) {
    public Company toModel() {
        return Company.builder()
                .name(name)
                .legalName(legalName)
                .cuit(cuit)
                .build();
    }
}
