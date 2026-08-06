package com.agro.feature.auth.services.authentication;

import com.agro.feature.auth.services.userDetails.UserCredentials;

import com.agro.shared.entities.Credentials;

public interface LoginService {
    UserCredentials login(com.agro.shared.entities.Credentials credentials);
}
