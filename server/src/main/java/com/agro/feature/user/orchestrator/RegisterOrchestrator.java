package com.agro.feature.user.orchestrator;

import com.agro.feature.user.domain.User;

public interface RegisterOrchestrator {
    User register(User user, Long id_company);
}
