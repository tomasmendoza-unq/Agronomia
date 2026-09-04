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
        SELECT c FROM Client c
        WHERE c.companyId = :companyId
        AND (:search IS NULL OR c.searchText LIKE CONCAT('%', :search, '%'))
        ORDER BY c.sortKey ASC
    """)
    Page<Client> searchClientByCompanyId(
            @Param("companyId") Long companyId,
            @Param("search") String search,
            Pageable pageable
    );
}
