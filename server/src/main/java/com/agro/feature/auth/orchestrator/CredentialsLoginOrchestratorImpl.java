package com.agro.feature.auth.orchestrator;

import com.agro.feature.auth.domain.Auth;
import com.agro.feature.auth.services.jwt.JwtService;
import com.agro.feature.auth.services.userDetails.UserCredentials;
import com.agro.feature.auth.services.authentication.LoginService;
import com.agro.feature.auth.dtos.request.Credentials;
import com.agro.feature.company.contracts.CompanyDataService;
import com.agro.feature.company.domain.Company;
import org.springframework.stereotype.Service;

@Service
public class CredentialsLoginOrchestratorImpl implements LoginOrchestrator {

    private LoginService authService;
    private JwtService jwtService;
    private final CompanyDataService companyDataService;

    public CredentialsLoginOrchestratorImpl(LoginService authService, JwtService jwtService, CompanyDataService companyDataService) {
        this.authService = authService;
        this.jwtService = jwtService;
        this.companyDataService = companyDataService;
    }

    @Override
    public Auth login(Credentials credentials) {
        UserCredentials userCredentials = authService.login(credentials);
        String companyLogo = companyDataService.getCompanyLogoByUser(userCredentials.getId());
        String token = jwtService.generate(userCredentials);
        return new Auth(
                userCredentials.getName(),
                userCredentials.getEmail(),
                userCredentials.getRole(),
                token,
                userCredentials.getId(),
                companyLogo);
    }
}
