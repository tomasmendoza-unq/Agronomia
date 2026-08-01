package com.agro.core.auth.contracts;

import com.agro.shared.entities.UserAuthenticate;

public interface TokenGenerator {
    String generate(UserAuthenticate credentials);
}
