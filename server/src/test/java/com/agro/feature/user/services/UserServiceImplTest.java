package com.agro.feature.user.services;

import com.agro.core.ContainerPostgresql;
import com.agro.feature.company.domain.Company;
import com.agro.feature.company.service.CompanyService;
import com.agro.feature.user.domain.valueObjects.EmailValue;
import com.agro.feature.user.orchestrator.RegisterOrchestrator;
import com.agro.shared.entities.rol.Role;
import com.agro.feature.user.domain.User;
import com.agro.feature.user.persistence.daos.UserDAO;
import com.agro.feature.user.persistence.repositories.UserRepository;
import com.agro.shared.entities.userAuthenticate.UserAuthenticate;
import com.agro.shared.service.ResetService;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.test.context.ActiveProfiles;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;
import org.testcontainers.postgresql.PostgreSQLContainer;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Testcontainers
@ActiveProfiles("test")
class UserServiceImplTest {
    @Container
    private static PostgreSQLContainer postgres = ContainerPostgresql.getContainer();

    @Autowired
    private RegisterOrchestrator orchestrator;

    @Autowired
    private CompanyService companyService;

    @Autowired
    private ResetService resetService;

    @Autowired
    private UserServiceImpl service;

    private User user;

    private Company company;

    @BeforeEach
    void setUp() {
        company = companyService.save(Company.builder()
                .cuit("12312312")
                .logo("12312312")
                .name("12312312")
                .legalName("12312312")
                .build());

        user = User.builder()
                .name("12312312")
                .email(new EmailValue("n2n@gmail.com"))
                .role(Role.DUENIO)
                .build();

        user = orchestrator.register(user, company.getId());
    }

    @Test
    void testSeBuscaLasCredencialesDeUnUsuarioPorSuMail() {
        UserAuthenticate addedUser = service.getCredentialsByEmail(user.getEmail());
        assertEquals(user.getEmail(), addedUser.email());
        assertEquals(user.getId(), addedUser.id());
        assertEquals(user.getRole(), addedUser.role());
    }

    @Test
    void testFindAllFiltraPorEmpresaDelAdmin() {
        User colega = User.builder()
                .name("Colega Misma Empresa")
                .email(new EmailValue("colega@gmail.com"))
                .role(Role.VENDEDOR)
                .build();
        orchestrator.register(colega, company.getId());

        Company otraCompany = companyService.save(Company.builder()
                .cuit("99999999")
                .logo("otro-logo")
                .name("Otra Empresa")
                .legalName("Otra Empresa SA")
                .build());

        User usuarioOtraEmpresa = User.builder()
                .name("Usuario Otra Empresa")
                .email(new EmailValue("otro@gmail.com"))
                .role(Role.VENDEDOR)
                .build();
        orchestrator.register(usuarioOtraEmpresa, otraCompany.getId());

        Page<User> result = service.findAll(0, 10, user.getId());

        assertEquals(2, result.getTotalElements());
        assertTrue(result.getContent().stream()
                .allMatch(u -> u.getCompany().getId() == company.getId()));
    }

    @Test
    void testFindAllRespetaLaPaginacion() {
        for (int i = 0; i < 5; i++) {
            User u = User.builder()
                    .name("User " + i)
                    .email(new EmailValue("user" + i + "@gmail.com"))
                    .role(Role.VENDEDOR)
                    .build();
            orchestrator.register(u, company.getId());
        }
        Page<User> firstPage = service.findAll(0, 3, user.getId());

        assertEquals(3, firstPage.getContent().size());
        assertEquals(6, firstPage.getTotalElements());
        assertEquals(2, firstPage.getTotalPages());
    }

    @Test
    void testFindAllNoDevuelveUsuariosDeOtraEmpresa() {
        Company otraCompany = companyService.save(Company.builder()
                .cuit("55555555")
                .logo("logo-x")
                .name("Empresa X")
                .legalName("Empresa X SA")
                .build());

        User usuarioOtraEmpresa = User.builder()
                .name("Ajeno")
                .email(new EmailValue("ajeno@gmail.com"))
                .role(Role.VENDEDOR)
                .build();
        orchestrator.register(usuarioOtraEmpresa, otraCompany.getId());

        Page<User> result = service.findAll(0, 10, user.getId());

        assertTrue(result.getContent().stream()
                .noneMatch(u -> u.getEmail().equals("ajeno@gmail.com")));
    }

    @Test
    void testSeRecuperaUnUsuarioPorSuId() {
        User found = service.getUserById(user.getId());
        assertEquals(user.getId(), found.getId());
    }

    @AfterEach
    void tearDown() {
        resetService.resetAll();
    }
}