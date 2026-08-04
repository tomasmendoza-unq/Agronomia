package com.agro.feature.user.contracts;

import com.agro.shared.entities.UserAuthenticate;

public interface UserCredentialsService {
    UserAuthenticate getCredentialsByEmail(String email);
    UserAuthenticate getCredentialsById(Long id);
}
