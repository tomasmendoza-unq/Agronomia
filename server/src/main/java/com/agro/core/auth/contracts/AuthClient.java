package com.agro.core.auth.contracts;

import com.agro.shared.entities.Credentials;

public interface AuthClient {

    void validate(Credentials credentials);
}
