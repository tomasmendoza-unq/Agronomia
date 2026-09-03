package com.agro.feature.client.persistence.daos;

import com.agro.feature.client.domain.Client;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientDAO extends JpaRepository<Client, Long> {
    @Query("""
        FROM NaturalPerson n
        WHERE n.companyId = :companyId
        AND (LOWER(n.surname) LIKE LOWER(CONCAT('%', :search, '%'))
             OR LOWER(n.name) LIKE LOWER(CONCAT('%', :search, '%')))
        ORDER BY n.surname ASC, n.name ASC
        
        UNION
        
        FROM RazonSocial r
        WHERE r.companyId = :companyId
        AND (LOWER(r.razonSocial) LIKE LOWER(CONCAT('%', :search, '%'))
             OR LOWER(r.associateName) LIKE LOWER(CONCAT('%', :search, '%')))
             OR LOWER(r.associateSurname) LIKE LOWER(CONCAT('%', :search, '%')))
        ORDER BY r.razonSocial ASC
    """)
    Page<Client> searchClientByCompanyId(
            @Param("companyId") Long companyId,
            @Param("search") String search,
            Pageable pageable
    );
}
