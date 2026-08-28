package com.agro.feature.provider.persistence;

import com.agro.feature.provider.domain.Provider;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProviderDAO extends JpaRepository<Provider, Long> {
}
