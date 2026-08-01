package com.agro.feature.auth.orchestrator;

import com.agro.core.auth.contracts.AuthClient;
import com.agro.core.auth.contracts.TokenGenerator;
import com.agro.feature.auth.domain.Auth;
import com.agro.shared.entities.Credentials;
import com.agro.feature.user.contracts.UserAuthenticatorService;
import com.agro.shared.entities.UserAuthenticate;
import org.springframework.stereotype.Service;

@Service
public class AuthOrchestratorImpl implements AuthOrchestrator {

    private AuthClient authClient;
    private UserAuthenticatorService userService;
    private TokenGenerator tokenGenerator;

    public AuthOrchestratorImpl(AuthClient authClient, UserAuthenticatorService userService, TokenGenerator tokenGenerator) {
        this.authClient = authClient;
        this.userService = userService;
        this.tokenGenerator = tokenGenerator;
    }

    @Override
    public Auth auth(Credentials credentials) {
        UserAuthenticate authenticate = userService.getCredentialsByEmail(credentials.email());
        authClient.validate(credentials);
        String token = tokenGenerator.generate(authenticate);
        return new Auth(authenticate.name(), authenticate.email(), token, authenticate.id());
    }
}
