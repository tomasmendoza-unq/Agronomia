package com.agro.feature.user.orchestrador;

import com.agro.core.ContainerPostgresql;
import com.agro.feature.company.domain.Company;
import com.agro.feature.company.service.CompanyService;
import com.agro.feature.user.domain.Role;
import com.agro.feature.user.domain.User;
import com.agro.feature.user.domain.exceptions.EmailDuplicatedException;
import com.agro.feature.user.domain.valueObjects.EmailValue;
import com.agro.feature.user.orchestrator.RegisterOrchestrator;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;
import org.testcontainers.postgresql.PostgreSQLContainer;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Testcontainers
public class RegisterOrchestradorImplTest {

    @Container
    private static PostgreSQLContainer postgres = ContainerPostgresql.getContainer();

    @Autowired
    private RegisterOrchestrator orchestrator;

    @Autowired
    private CompanyService companyService;

    private User user;

    private Company company;

    @BeforeEach
    public void setUp() {
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
    public void testRegisterUser() {
        User saved = orchestrator.register(user, company.getId());

        companyService.getCompanyById(company.getId());

        assertEquals(company.getId(), saved.getCompany().getId());
        assertEquals(user.getName(), saved.getName());
        assertEquals(user.getEmail(), saved.getEmail());
        assertEquals(user.getPassword(), saved.getPassword());
    }

    @Test
    public void testRegisterFailedEmailDuplicated(){
        User saved = orchestrator.register(user, company.getId());

        assertThrows(EmailDuplicatedException.class,() -> orchestrator.register(user,company.getId()));
    }
}
