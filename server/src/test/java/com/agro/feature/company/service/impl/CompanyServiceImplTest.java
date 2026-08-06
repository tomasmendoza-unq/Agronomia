package com.agro.feature.company.service.impl;

import com.agro.core.ContainerPostgresql;
import com.agro.feature.company.contracts.CompanyDataService;
import com.agro.feature.company.domain.Company;
import com.agro.feature.company.service.CompanyService;
import com.agro.feature.user.domain.User;
import com.agro.feature.user.domain.valueObjects.EmailValue;
import com.agro.feature.user.orchestrator.RegisterOrchestrator;
import com.agro.shared.entities.rol.Role;
import com.agro.shared.service.ResetService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;
import org.testcontainers.postgresql.PostgreSQLContainer;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Testcontainers
@ActiveProfiles("test")
class CompanyServiceImplTest {
    @Container
    private static PostgreSQLContainer postgres = ContainerPostgresql.getContainer();

    @Autowired
    private CompanyService companyService;

    @Autowired
    private CompanyDataService  companyDataService;

    @Autowired
    private RegisterOrchestrator orchestrator;

    @Autowired
    private ResetService resetService;

    public Company company;

    private User user;

    @BeforeEach
    void setup(){
        company = companyService.save(Company.builder()
                .cuit("12312312")
                .logo("12312312")
                .name("12312312")
                .legalName("12312312")
                .build());
        user = User.builder()
                .name("12312312")
                .email(new EmailValue("n2n@gmail.com"))
                .role(Role.ADMIN)
                .build();
    }

    @Test
    public void getLogoByUserId(){
        User saved = orchestrator.register(user, company.getId());

        String logo = companyDataService.getCompanyLogoByUser(saved.getId());

        assertEquals("12312312", logo);
    }
}