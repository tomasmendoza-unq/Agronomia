package com.agro.feature.auth.orchestrator;

import com.agro.core.auth.contracts.TokenGenerator;
import com.agro.feature.auth.domain.Auth;
import com.agro.feature.auth.dtos.Credentials;
import com.agro.feature.auth.services.AuthService;
import com.agro.feature.user.contracts.UserAuthenticatorService;
import com.agro.shared.entities.UserAuthenticate;
import org.springframework.stereotype.Service;

@Service
public class AuthOrchestratorImpl implements AuthOrchestrator {

    private AuthService authService;
    private UserAuthenticatorService userService;
    private TokenGenerator tokenGenerator;

    public AuthOrchestratorImpl(AuthService authService, UserAuthenticatorService userService, TokenGenerator tokenGenerator) {
        this.authService = authService;
        this.userService = userService;
        this.tokenGenerator = tokenGenerator;
    }

    @Override
    public Auth auth(Credentials credentials) {
        UserAuthenticate authenticateCredentials = userService.getCredentialsByEmail(credentials.email());
        String token = tokenGenerator.generate(authenticateCredentials);
        return authService.authenticate(authenticateCredentials, token);
    }
}
