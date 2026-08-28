package com.agro.feature.provider.controller;

import com.agro.core.api.Api;
import com.agro.feature.provider.contracts.ProviderDataService;
import com.agro.feature.provider.dtos.response.ProviderResponseDTO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Slf4j
@RequestMapping(Api.PROVIDER)
public class ProviderControllerREST {

    private final ProviderDataService providerDataService;

    public ProviderControllerREST(ProviderDataService providerDataService) {
        this.providerDataService = providerDataService;
    }

    @GetMapping
    public List<ProviderResponseDTO> getProviders() {
        return providerDataService.getProviders().stream().map(ProviderResponseDTO::fromModel).toList();
    }
}
