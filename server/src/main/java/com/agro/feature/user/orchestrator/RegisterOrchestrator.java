package com.agro.feature.user.orchestrator;

import com.agro.feature.user.domain.User;
import jakarta.validation.constraints.NotBlank;

public interface RegisterOrchestrator {
    User register(User user, Long id_company, @NotBlank Long id_branch);
}
