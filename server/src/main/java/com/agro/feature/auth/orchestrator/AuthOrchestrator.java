package com.agro.feature.auth.orchestrator;

import com.agro.feature.auth.domain.Auth;
import com.agro.feature.auth.dtos.Credentials;

public interface AuthOrchestrator {
    Auth auth(Credentials credentials);
}
