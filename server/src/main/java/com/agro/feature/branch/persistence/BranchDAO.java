package com.agro.feature.branch.persistence;

import com.agro.feature.branch.domain.Branch;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BranchDAO extends JpaRepository<Branch, Long> {
}
