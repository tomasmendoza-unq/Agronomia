package com.agro.feature.auth.services.jwt;

import com.agro.feature.auth.services.userDetails.UserCredentials;

public interface JwtService {
    String generate(UserCredentials credentials);
}
