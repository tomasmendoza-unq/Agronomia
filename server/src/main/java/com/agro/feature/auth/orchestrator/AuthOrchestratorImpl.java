package com.agro.feature.auth.orchestrator;

import com.agro.feature.auth.domain.Auth;
import com.agro.feature.auth.dtos.Credentials;
import org.springframework.stereotype.Service;
/*
@Service
public class AuthOrchestratorImpl implements AuthOrchestrator {

    private AuthService authService;
    private UserAuthenticatorService userService;
    private TokenGeneratorService tokenGeneratorService;

    public AuthOrchestratorImpl(AuthService authService, UserCredentialsService userService, TokenGeneratorService tokenGeneratorService) {
        this.authService = authService;
        this.userService = userService;
        this.tokenGeneratorService = tokenGeneratorService;
    }

    @Override
    public Auth auth(Credentials credentials) {
        UserAuthenticate authenticateCredentials = userService.getCredentialsByEmail(credentials.email());
        String token = tokenGeneratorService.generate(authenticateCredentials);
        return authService.authenticate(authenticateCredentials, token);
    }
}
*/