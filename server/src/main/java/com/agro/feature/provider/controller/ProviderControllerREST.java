package com.agro.feature.provider.controller;

import com.agro.core.api.Api;
import com.agro.feature.provider.contracts.ProviderDataService;
import com.agro.feature.provider.dtos.response.ProviderResponseDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Slf4j
@RequestMapping(Api.PROVIDER)
@Tag(name = "Proveedores", description = "Operaciones relacionadas a la gestión de proveedores")
public class ProviderControllerREST {

    private final ProviderDataService providerDataService;

    public ProviderControllerREST(ProviderDataService providerDataService) {
        this.providerDataService = providerDataService;
    }

    @GetMapping
    @PreAuthorize("hasAnyRole('DUENIO', 'VENDEDOR')")
    @Operation(summary = "Obtener los proveedores de forma paginada", description = "Devuelve los proveedores paginados.")
    public List<ProviderResponseDTO> getProviders() {
        return providerDataService.getProviders().stream().map(ProviderResponseDTO::fromModel).toList();
    }
}
