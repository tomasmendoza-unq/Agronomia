package com.agro.feature.provider.contracts;

import com.agro.feature.provider.domain.Provider;
import org.springframework.data.domain.Page;

import java.util.Arrays;
import java.util.List;

public interface ProviderDataService {
    Page<Provider> getProviders(int page, int size, Long userId);
}
