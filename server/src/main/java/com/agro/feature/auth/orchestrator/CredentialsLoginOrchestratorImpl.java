package com.agro.feature.auth.orchestrator;

import com.agro.feature.auth.domain.Auth;
import com.agro.feature.auth.services.jwt.JwtService;
import com.agro.shared.entities.Credentials;
import com.agro.feature.user.contracts.UserCredentialsService;
import com.agro.shared.entities.UserAuthenticate;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

@Service
public class CredentialsLoginOrchestratorImpl implements LoginOrchestrator {

    private AuthenticationManager authenticatorManager;
    private UserCredentialsService credentialsService;
    private JwtService jwtService;

    public CredentialsLoginOrchestratorImpl(AuthenticationManager authenticatorManager, UserCredentialsService userService, JwtService jwtService) {
        this.authenticatorManager = authenticatorManager;
        this.credentialsService = userService;
        this.jwtService = jwtService;
    }

    @Override
    public Auth auth(Credentials credentials) {
        UserAuthenticate authenticate = credentialsService.getCredentialsByEmail(credentials.email());
        authenticatorManager.authenticate(
                new UsernamePasswordAuthenticationToken(credentials.email(), credentials.password())
        );
        String token = jwtService.generate(authenticate);
        return new Auth(authenticate.name(), authenticate.email(), token, authenticate.id());
    }
}
