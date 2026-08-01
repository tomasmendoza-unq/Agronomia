package com.agro.core.auth.services.validator;

import com.agro.core.auth.contracts.AuthClient;
import com.agro.shared.entities.Credentials;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class AuthValidatorImpl implements AuthValidator, AuthClient {

    private UserDetailsService userDetailsService;
    private AuthenticationManager manager;

    public AuthValidatorImpl(UserDetailsService userDetailsService, AuthenticationManager manager) {
        this.manager = manager;
        this.userDetailsService = userDetailsService;
    }

    @Override
    public void validate(Credentials credentials) {
        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(credentials.email(), credentials.password());
        manager.authenticate(token);
    }
}
