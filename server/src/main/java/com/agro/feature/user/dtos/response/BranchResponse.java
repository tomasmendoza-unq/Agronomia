package com.agro.feature.user.dtos.response;

import com.agro.feature.branch.domain.Branch;

public record BranchResponse(
        long id,
        String city,
        String street
) {
    public static BranchResponse fromModel(Branch branch) {
        return new BranchResponse(
                branch.getId(),
                branch.getCity(),
                branch.getDirection()
        );
    }
}
