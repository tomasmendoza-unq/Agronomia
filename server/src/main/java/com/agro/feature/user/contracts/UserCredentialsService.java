package com.agro.feature.user.contracts;

import com.agro.shared.entities.userAuthenticate.UserAuthenticate;

public interface UserCredentialsService {
    UserAuthenticate getCredentialsByEmail(String email);
}
