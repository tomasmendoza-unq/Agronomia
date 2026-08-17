package com.agro.feature.company.persistence.daos;

import com.agro.feature.company.domain.Company;
import com.agro.feature.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CompanyDAO extends JpaRepository<Company, Long> {
    Optional<Company> findByUsers_Id(Long idUser);


    boolean existsByIdAndUsers_Id(Long companyId, Long adminId);
}
