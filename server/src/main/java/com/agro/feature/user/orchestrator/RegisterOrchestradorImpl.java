package com.agro.feature.user.orchestrator;

import com.agro.feature.company.contracts.CompanyDataService;
import com.agro.feature.company.domain.Company;
import com.agro.feature.company.service.CompanyService;
import com.agro.feature.user.domain.User;
import com.agro.feature.user.domain.exceptions.EmailDuplicatedException;
import com.agro.feature.user.services.UserService;
import jakarta.transaction.Transactional;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@Transactional
public class RegisterOrchestradorImpl implements RegisterOrchestrator {

    private final UserService userService;

    private final CompanyDataService companyService;

    public RegisterOrchestradorImpl(UserService userService, CompanyDataService companyService) {
        this.userService = userService;
        this.companyService = companyService;
    }

    @Override
    public User register(User user, Long id_company) {
        if (userService.existsByEmail(user.getEmail())) {
            throw new EmailDuplicatedException("El email ya existe");
        }

        user.generateTemporalPassword();
        Company company = companyService.getCompanyById(id_company);
        user.addCompany(company);
        User saved = userService.save(user);
        company.addUser(user);
        return saved;
    }
}
