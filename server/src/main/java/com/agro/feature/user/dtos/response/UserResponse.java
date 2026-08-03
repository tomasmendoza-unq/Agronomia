package com.agro.feature.user.dtos.response;

import com.agro.feature.company.domain.Company;

public record UserResponse (
        String name,
        String role,
        String email

) {
}
