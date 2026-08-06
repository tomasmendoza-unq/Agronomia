package com.agro.shared.data.impl;

import com.agro.feature.company.domain.Company;
import com.agro.feature.company.service.CompanyService;
import com.agro.feature.user.domain.User;
import com.agro.feature.user.domain.valueObjects.EmailValue;
import com.agro.feature.user.orchestrator.RegisterOrchestrator;
import com.agro.feature.user.services.UserService;
import com.agro.shared.data.DataSeeder;
import com.agro.shared.entities.rol.Role;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Component
@Profile("dev")
public class DataSeederImpl implements DataSeeder {

    private final CompanyService companyService;

    private final UserService userService;


    public DataSeederImpl(CompanyService companyService, UserService userService) {
        this.companyService = companyService;
        this.userService = userService;

    }

    @Override
    public void run(String... args) throws Exception {
        User user = User.builder()
                .name("12312312")
                .email(new EmailValue("n2n@gmail.com"))
                .role(Role.ADMIN)
                .password("123")
                .build();

        Company company = Company.builder()
                .name("AgroTech")
                .legalName("AgroTech S.A.")
                .cuit("30-12345678-9")
                .logo("https://res.cloudinary.com/dvkvlpq07/image/upload/v1785440325/logo_tfzoil.jpg")
                .build();

        company.addUser(user);

        user.addCompany(company);

        userService.save(user);
    }
}
