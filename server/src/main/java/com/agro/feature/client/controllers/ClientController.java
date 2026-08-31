package com.agro.feature.client.controllers;

import com.agro.core.api.Api;
import com.agro.feature.client.domain.Client;
import com.agro.feature.client.dtos.ClientFactory;
import com.agro.feature.client.dtos.request.ClientRequest;
import com.agro.feature.client.dtos.response.ClientResponse;
import com.agro.feature.client.services.ClientService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(Api.CLIENT)
@Tag(name = "Clientes", description = "Operaciones relacionadas a la gestión de clientes")
public class ClientController {
    private ClientService service;
    private ClientFactory factory;

    public ClientController(ClientService service, ClientFactory factory) {
        this.service = service;
        this.factory = factory;
    }

    @PostMapping("/add")
    @PreAuthorize("hasAnyRole('DUENIO', 'VENDEDOR')")
    @Operation(summary = "Agregar un cliente", description = "Devuelve el cliente agregado")
    public ResponseEntity<ClientResponse> addClient(@Valid @RequestBody ClientRequest clientRequest) {
        Client client = factory.createToRequest(clientRequest);
        Client clientAdded = service.save(client);
        return ResponseEntity.ok(factory.createToResponse(clientAdded));
    }
}
