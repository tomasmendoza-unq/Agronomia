package com.agro.feature.user.orchestrator;

import com.agro.feature.branch.contracts.BranchDataService;
import com.agro.feature.branch.domain.Branch;
import com.agro.feature.company.contracts.CompanyDataService;
import com.agro.feature.company.domain.Company;
import com.agro.feature.email.contracts.EmailSendRegister;
import com.agro.feature.user.domain.User;
import com.agro.feature.user.services.UserService;
import com.agro.shared.entities.errorMotives.ErrorMotive;
import com.agro.shared.valueObjects.email.EmailException;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class RegisterOrchestradorImpl implements RegisterOrchestrator {

    private final UserService userService;

    private final CompanyDataService companyService;

    private final EmailSendRegister emailSendRegister;

    private final BranchDataService branchDataService;

    public RegisterOrchestradorImpl(UserService userService, CompanyDataService companyService, EmailSendRegister emailSendRegister, BranchDataService branchDataService) {
        this.userService = userService;
        this.companyService = companyService;
        this.emailSendRegister = emailSendRegister;
        this.branchDataService = branchDataService;
    }

    @Override
    public User register(User user, Long id_company, Long id_branch) {
        if (userService.existsByEmail(user.getEmail())) {
            throw new EmailException(ErrorMotive.DUPLICATE_EMAIL);
        }

        String rawPassword = user.generateTemporalPassword();

        Company company = companyService.getCompanyById(id_company);

        Branch branch = branchDataService.getBranchById(id_branch);

        user.addCompany(company);

        user.addBranch(branch);

        User saved = userService.save(user);
        company.addUser(user);

        emailSendRegister.sendRegister(
                user.getFullName(),
                user.getEmail(),
                rawPassword,
                user.getCompany().getName()
        );

        return saved;
    }
}
