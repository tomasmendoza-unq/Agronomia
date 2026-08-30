package com.agro.feature.provider.persistence;

import com.agro.feature.provider.domain.Provider;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProviderDAO extends JpaRepository<Provider, Long> {
    Page<Provider> findAllByCompanyId(Long companyId, PageRequest pageRequest);
}
