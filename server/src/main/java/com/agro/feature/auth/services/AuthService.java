package com.agro.feature.auth.services;

import com.agro.feature.auth.domain.Auth;
import com.agro.shared.entities.UserAuthenticate;

public interface AuthService {
    Auth authenticate(UserAuthenticate credentials, String token);
}
