package com.agro.core.data.impl;

import com.agro.feature.branch.domain.Branch;
import com.agro.feature.company.domain.Company;
import com.agro.feature.company.service.CompanyService;
import com.agro.feature.user.domain.User;
import com.agro.feature.user.domain.valueObjects.EmailValue;
import com.agro.feature.user.services.UserService;
import com.agro.core.data.DataSeeder;
import com.agro.shared.entities.rol.Role;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

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
                .name("Tomas")
                .surname("Mendoza")
                .email(new EmailValue("n2n@gmail.com"))
                .role(Role.DUENIO)
                .password("123")
                .build();

        Branch branch = Branch.builder()
                .city("Berlin")
                .direction("street 123")
                .build();

        Branch branch2 = Branch.builder()
                .city("Argentina")
                .direction("street 123")
                .build();

        Company company = Company.builder()
                .name("AgroTech")
                .legalName("AgroTech S.A.")
                .cuit("30-12345678-9")
                .branches(new ArrayList<>(List.of(branch2, branch)))
                .users(new ArrayList<>(List.of(user)))
                .logo("https://res.cloudinary.com/dvkvlpq07/image/upload/v1785440325/logo_tfzoil.jpg")
                .build();

        user.addCompany(company);

        userService.save(user);
    }
}
