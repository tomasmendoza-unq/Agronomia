package com.agro.feature.auth.services.validate;

import com.agro.feature.auth.services.userDetails.UserCredentials;
import com.agro.shared.entities.Credentials;

public interface AuthService {
    UserCredentials login(Credentials credentials);
}
