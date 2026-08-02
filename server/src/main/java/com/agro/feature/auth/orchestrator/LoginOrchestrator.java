package com.agro.feature.auth.orchestrator;

import com.agro.feature.auth.domain.Auth;
import com.agro.shared.entities.Credentials;

public interface LoginOrchestrator {
    Auth auth(Credentials credentials);
}
