package com.agro.feature.user.services;

import com.agro.feature.user.contracts.UserAuthenticatorService;
import com.agro.shared.entities.UserAuthenticate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UserServiceImpl implements UserService, UserAuthenticatorService {

    @Override
    public UserAuthenticate getCredentialsByEmail(String email) {
        return null;
    }
}
