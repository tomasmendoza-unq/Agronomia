package com.agro.feature.user.contracts;

import com.agro.shared.entities.UserAuthenticate;

public interface UserAuthenticatorService {
    UserAuthenticate getCredentialsByEmail(String email);
}
