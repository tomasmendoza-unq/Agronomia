package com.agro.feature.auth.services.login;

import com.agro.feature.auth.services.userDetails.UserCredentials;
import com.agro.shared.entities.Credentials;

public interface LoginService {
    UserCredentials login(Credentials credentials);
}
