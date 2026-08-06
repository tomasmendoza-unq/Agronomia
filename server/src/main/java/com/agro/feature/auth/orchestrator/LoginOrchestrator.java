package com.agro.feature.auth.orchestrator;

import com.agro.feature.auth.domain.Auth;
import com.agro.feature.auth.dtos.request.Credentials;

public interface LoginOrchestrator {
    Auth login(Credentials credentials);
}
