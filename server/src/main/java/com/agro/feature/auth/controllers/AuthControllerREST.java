package com.agro.feature.auth.controllers;

import com.agro.core.api.Api;
import com.agro.feature.auth.dtos.AuthRequest;
import com.agro.feature.auth.dtos.AuthResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(Api.AUTH)
public class AuthControllerREST {

    @PostMapping(Api.LOGIN)
    public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest credentials) {
        return null;
    }
}
