package com.agro.feature.company.dtos.response;

import com.agro.feature.branch.domain.Branch;

public record BranchResponseDTO(
        long id,
        String city,
        String street
) {
    public static BranchResponseDTO fromModel(Branch branch) {
        return new BranchResponseDTO(branch.getId(), branch.getCity(), branch.getDirection());
    }
}
