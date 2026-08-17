package com.agro.feature.company.service.impl;

import com.agro.core.ContainerPostgresql;
import com.agro.feature.company.contracts.CompanyDataService;
import com.agro.feature.company.domain.Company;
import com.agro.feature.company.domain.exceptions.IsNotAOwnerOfCompany;
import com.agro.feature.company.service.CompanyService;
import com.agro.feature.user.domain.User;
import com.agro.feature.user.domain.valueObjects.EmailValue;
import com.agro.feature.user.orchestrator.RegisterOrchestrator;
import com.agro.shared.entities.rol.Role;
import com.agro.shared.service.ResetService;
import org.junit.jupiter.api.AfterEach;
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
                .logo("img.jpg")
                .name("Matilda")
                .legalName("Matilda SA")
                .build());
        user = User.builder()
                .name("12312312")
                .email(new EmailValue("n2n@gmail.com"))
                .role(Role.DUENIO)
                .build();
    }

    @Test
    public void getCompanyByUserId(){
        User saved = orchestrator.register(user, company.getId());

        Company recovered = companyDataService.getCompanyByUserId(saved.getId());

        assertEquals("img.jpg", recovered.getLogo());
        assertEquals("Matilda", recovered.getName());
        assertEquals("12312312", recovered.getCuit());
        assertEquals("Matilda SA", recovered.getLegalName());
        assertEquals(company.getId(), recovered.getId());
    }

    @Test
    public void editCompany_whenAdminBelongsToCompany_updatesCompany(){
        User saved = orchestrator.register(user, company.getId());

        Company model = Company.builder()
                .cuit("99999999")
                .logo("newLogo.jpg")
                .name("Matilda Renovada")
                .legalName("Matilda Renovada SA")
                .build();

        Company updated = companyDataService.editCompany(saved.getId(), model, company.getId());

        assertEquals("99999999", updated.getCuit());
        assertEquals("newLogo.jpg", updated.getLogo());
        assertEquals("Matilda Renovada", updated.getName());
        assertEquals("Matilda Renovada SA", updated.getLegalName());
        assertEquals(company.getId(), updated.getId());
    }

    @Test
    public void editCompany_whenAdminDoesNotBelongToCompany_throwsException(){
        Company otherCompany = companyService.save(Company.builder()
                .cuit("00000000")
                .logo("other.jpg")
                .name("Otra Empresa")
                .legalName("Otra Empresa SA")
                .build());

        User saved = orchestrator.register(user, company.getId());

        Company model = Company.builder()
                .cuit("99999999")
                .logo("newLogo.jpg")
                .name("Intento Ajeno")
                .legalName("Intento Ajeno SA")
                .build();

        assertThrows(IsNotAOwnerOfCompany.class, () ->
                companyDataService.editCompany(saved.getId(), model, otherCompany.getId())
        );
    }


    @AfterEach
    public void tearDown(){
        resetService.resetAll();
    }
}