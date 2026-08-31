package com.agro.feature.provider.controller;

import com.agro.core.api.Api;
import com.agro.feature.provider.contracts.ProviderDataService;
import com.agro.feature.provider.domain.Provider;
import com.agro.feature.provider.dtos.response.ProviderResponseDTO;
import com.agro.shared.dtos.table.PageResponseDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

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
    @PreAuthorize("hasAnyRole('DUENIO', 'VENDEDOR', 'FACTURACION')")
    @Operation(summary = "Obtener los proveedores de forma paginada", description = "Devuelve los proveedores paginados.")
    public PageResponseDTO<ProviderResponseDTO> getProviders(
            @RequestAttribute("userId") Long  userId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "8") int size,
            @RequestParam(defaultValue = "") String name
    ) {
        return PageResponseDTO.from(
                providerDataService.getProviders(page, size, userId, name)
                        .map(ProviderResponseDTO::fromModel)
        );
    }

}
