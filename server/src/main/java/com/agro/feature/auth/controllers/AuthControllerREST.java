package com.agro.feature.auth.controllers;

import com.agro.core.api.Api;
import com.agro.feature.auth.domain.Auth;
import com.agro.feature.auth.dtos.AuthMapper;
import com.agro.shared.entities.Credentials;
import com.agro.feature.auth.dtos.AuthResponse;
import com.agro.feature.auth.orchestrator.AuthOrchestrator;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(Api.AUTH)
public class AuthControllerREST {

    private AuthOrchestrator orchestrator;

    public AuthControllerREST(AuthOrchestrator orchestrator) {
        this.orchestrator = orchestrator;
    }

    @PostMapping(Api.LOGIN)
    public ResponseEntity<AuthResponse> login(@RequestBody Credentials credentials) {
        Auth auth = orchestrator.auth(credentials);
        return ResponseEntity.ok()
                .header("Authorization", "Bearer " + auth.token())
                .body(AuthMapper.INSTANCE.modelToDto(auth));
    }
}
