package com.agro.feature.branch.service.impl;

import com.agro.feature.branch.contracts.BranchDataService;
import com.agro.feature.branch.domain.Branch;
import com.agro.feature.branch.persistence.BranchDAO;
import com.agro.shared.persistence.excepitons.NotFoundEntityException;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class BranchService implements BranchDataService {


    private final BranchDAO  branchDAO;

    public BranchService(BranchDAO branchDAO) {
        this.branchDAO = branchDAO;
    }


    @Override
    public Branch getBranchById(Long idBranch) {
        return branchDAO.findById(idBranch).orElseThrow(() -> new NotFoundEntityException("Sucursal no encontrada"));
    }
}
