package com.agro.core.auth.services.jwt;

import com.agro.core.auth.contracts.TokenGenerator;
import com.agro.shared.entities.UserAuthenticate;
import org.springframework.stereotype.Service;

@Service
public class JwtServiceImpl implements JwtService, TokenGenerator {

    @Override
    public String generate(UserAuthenticate credentials) {
        return "";
    }
}
