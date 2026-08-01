package com.agro.feature.auth.orchestrator;

import com.agro.feature.auth.domain.Auth;
import com.agro.shared.entities.Credentials;

public interface AuthOrchestrator {
    Auth auth(Credentials credentials);
}
