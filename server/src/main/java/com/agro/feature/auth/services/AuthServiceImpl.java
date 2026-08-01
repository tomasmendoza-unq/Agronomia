package com.agro.feature.auth.services;

import com.agro.feature.auth.domain.Auth;
import com.agro.shared.entities.UserAuthenticate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class AuthServiceImpl implements AuthService{
    @Override
    public Auth authenticate(UserAuthenticate credentials, String token) {
        return null;
    }
}
