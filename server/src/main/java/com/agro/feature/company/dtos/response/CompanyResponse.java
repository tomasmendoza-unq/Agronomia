package com.agro.feature.company.dtos.response;

import com.agro.feature.company.domain.Company;
import com.agro.shared.dtos.table.TableResponseDTO;
import org.jspecify.annotations.Nullable;

public record CompanyResponse(
        long id,
        String name,
        String legalName,
        String cuit,
        String logo
) {
    public static @Nullable CompanyResponse fromModel(Company company) {
        return new CompanyResponse(company.getId(), company.getName(), company.getLegalName(), company.getCuit(), company.getLogo());
    }
}
