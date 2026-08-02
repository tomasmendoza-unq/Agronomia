package com.agro.feature.auth.services.jwt;

import com.agro.shared.entities.UserAuthenticate;

public interface JwtService {
    String generate(UserAuthenticate credentials);
}
