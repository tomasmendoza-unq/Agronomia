package com.agro.feature.branch.contracts;

import com.agro.feature.branch.domain.Branch;

public interface BranchDataService {
    Branch getBranchById(Long idBranch);
}
