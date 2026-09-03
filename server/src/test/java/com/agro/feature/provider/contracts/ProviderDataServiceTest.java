package com.agro.feature.provider.contracts;

import com.agro.core.ContainerPostgresql;
import com.agro.feature.branch.domain.Branch;
import com.agro.feature.branch.persistence.BranchDAO;
import com.agro.feature.company.domain.Company;
import com.agro.feature.company.service.CompanyService;
import com.agro.feature.provider.contracts.ProviderDataService;
import com.agro.feature.provider.domain.Provider;
import com.agro.feature.provider.persistence.ProviderDAO;
import com.agro.feature.provider.service.ProviderService;
import com.agro.feature.user.domain.User;
import com.agro.shared.valueObjects.email.EmailValue;
import com.agro.feature.user.orchestrator.RegisterOrchestrator;
import com.agro.shared.entities.rol.Role;
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

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Testcontainers
@ActiveProfiles("test")
class ProviderDataServiceTest {

    @Container
    private static PostgreSQLContainer postgres = ContainerPostgresql.getContainer();

    @Autowired
    private ProviderService providerService;

    @Autowired
    private ProviderDataService  providerDataService;

    @Autowired
    private ProviderDAO providerDAO;

    @Autowired
    private CompanyService companyService;

    @Autowired
    private BranchDAO branchDAO;

    @Autowired
    private RegisterOrchestrator orchestrator;

    @Autowired
    private ResetService resetService;

    private Company company;

    private User user;

    private Branch branch;

    @BeforeEach
    void setup() {
        branch = branchDAO.save(Branch.builder()
                .city("Berlin")
                .direction("street 123")
                .build());

        company = companyService.save(Company.builder()
                .cuit("12312312")
                .name("Matilda")
                .legalName("Matilda SA")
                .build());

        User newUser = User.builder()
                .name("Tomas")
                .email(new EmailValue("n2n@gmail.com"))
                .role(Role.DUENIO)
                .build();

        user = orchestrator.register(newUser, company.getId(), branch.getId());
    }

    @Test
    public void getProviders_returnsOnlyProvidersFromUserCompany() {
        providerDAO.save(Provider.builder()
                .tradeName("Agroinsumos del Sur")
                .legalName("Agroinsumos del Sur S.R.L.")
                .cuit("30-87654321-0")
                .phoneNumber("11-4444-5555")
                .companyId(company.getId())
                .listPrices(new ArrayList<>(List.of(1500, 2300)))
                .build());

        providerDAO.save(Provider.builder()
                .tradeName("Insumos Pampa")
                .legalName("Insumos Pampa S.A.")
                .cuit("30-11223344-5")
                .phoneNumber("11-9999-8888")
                .companyId(company.getId())
                .listPrices(new ArrayList<>(List.of(800, 950)))
                .build());

        Company otherCompany = companyService.save(Company.builder()
                .cuit("00000000")
                .name("Otra Empresa")
                .legalName("Otra Empresa SA")
                .build());

        providerDAO.save(Provider.builder()
                .tradeName("Proveedor Ajeno")
                .legalName("Proveedor Ajeno S.A.")
                .cuit("30-00000000-0")
                .phoneNumber("11-0000-0000")
                .companyId(otherCompany.getId())
                .listPrices(new ArrayList<>())
                .build());

        Page<Provider> result = providerDataService.getProviders(0, 10, user.getId(), "");

        assertEquals(2, result.getTotalElements());
        assertTrue(result.getContent().stream()
                .allMatch(provider -> provider.getCompanyId().equals(company.getId())));
    }

    @Test
    public void getProviders_filtersByTradeNameOrLegalName() {
        providerDAO.save(Provider.builder()
                .tradeName("Agroinsumos del Sur")
                .legalName("Agroinsumos del Sur S.R.L.")
                .cuit("30-87654321-0")
                .phoneNumber("11-4444-5555")
                .companyId(company.getId())
                .listPrices(new ArrayList<>())
                .build());

        providerDAO.save(Provider.builder()
                .tradeName("Insumos Pampa")
                .legalName("Insumos Pampa S.A.")
                .cuit("30-11223344-5")
                .phoneNumber("11-9999-8888")
                .companyId(company.getId())
                .listPrices(new ArrayList<>())
                .build());

        Page<Provider> result = providerDataService.getProviders(0, 10, user.getId(), "Pampa");

        assertEquals(1, result.getTotalElements());
        assertEquals("Insumos Pampa", result.getContent().get(0).getTradeName());
    }

    @Test
    public void getProviders_returnsEmptyPage_whenCompanyHasNoProviders() {
        Page<Provider> result = providerDataService.getProviders(0, 10, user.getId(), "");

        assertTrue(result.getContent().isEmpty());
        assertEquals(0, result.getTotalElements());
    }

    @AfterEach
    public void tearDown() {
        resetService.resetAll();
    }
}