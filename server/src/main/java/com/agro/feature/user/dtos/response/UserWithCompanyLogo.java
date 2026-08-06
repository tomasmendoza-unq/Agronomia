package com.agro.feature.user.dtos.response;

public record UserWithCompanyLogo(
        Long id,
        String name,
        String role,
        String email,
        String companyLogo
) {
}
