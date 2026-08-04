package com.agro.feature.auth.services.authentication;

import com.agro.feature.auth.services.userDetails.UserCredentials;
import com.agro.feature.auth.dtos.request.Credentials;

public interface AuthenticateService {
    UserCredentials login(Credentials credentials);

    void authenticate(Long ids);
}
