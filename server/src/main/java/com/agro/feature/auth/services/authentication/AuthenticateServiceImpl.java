package com.agro.feature.auth.services.authentication;

import com.agro.feature.auth.services.userDetails.UserCredentials;
import com.agro.feature.auth.dtos.request.Credentials;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticateServiceImpl implements AuthenticateService {

    private AuthenticationManager manager;

    public AuthenticateServiceImpl(AuthenticationManager manager) {
        this.manager = manager;
    }

    @Override
    public UserCredentials login(Credentials credentials) {
        Authentication token = new UsernamePasswordAuthenticationToken(credentials.email(), credentials.password());
        Authentication authentication = manager.authenticate(token);
        return (UserCredentials) authentication.getPrincipal();
    }

    @Override
    public void authenticate(Long id) {
        Authentication token = new UsernamePasswordAuthenticationToken(id.toString(), null);
        Authentication authentication = manager.authenticate(token);
        SecurityContextHolder.getContext().setAuthentication(authentication);
    }
}
