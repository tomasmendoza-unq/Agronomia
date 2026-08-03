package com.agro.feature.auth.services.validate;

import com.agro.feature.auth.services.userDetails.UserCredentials;
import com.agro.shared.entities.Credentials;
import com.agro.shared.entities.UserAuthenticate;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

    private AuthenticationManager manager;

    public AuthServiceImpl(AuthenticationManager manager) {
        this.manager = manager;
    }

    @Override
    public UserCredentials login(Credentials credentials) {
        Authentication token = new UsernamePasswordAuthenticationToken(credentials.email(), credentials.password());
        Authentication authentication = manager.authenticate(token);
        return (UserCredentials) authentication.getPrincipal();
    }
}
