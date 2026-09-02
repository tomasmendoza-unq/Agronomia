package com.agro.feature.client.services.impl;

import com.agro.core.ContainerPostgresql;
import com.agro.feature.client.domain.Client;
import com.agro.feature.client.domain.NaturalPerson;
import com.agro.feature.client.persistence.daos.ClientDAO;
import com.agro.shared.entities.province.Province;
import com.agro.shared.service.ResetService;
import com.agro.shared.valueObjects.cuit.CuitException;
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
class ClientServiceImplTest {

    @Container
    private static PostgreSQLContainer postgres = ContainerPostgresql.getContainer();

    @Autowired
    private ClientServiceImpl service;

    @Autowired
    private ClientDAO dao;

    @Autowired
    private ResetService resetService;

    private Client client;

    @BeforeEach
    void setUp() {
        client = new NaturalPerson(
                "Nicolás",
                "Bossi",
                "11-11111111-1",
                "1162870692",
                "n@gmail.com",
                "Lavalle 123",
                "Florencio Varela",
                Province.Cordoba
        );
    }

    @Test
    void testSePersisteUnClient() {
        Client addedClient = service.save(client);
        assertNotNull(addedClient.getId());
    }

    @Test
    void testSiSePersisteOtroClienteConMismoCuit_LanzaExcepcion() {
        Client client1 = new NaturalPerson(
                "Nicolás",
                "Bossi",
                "11-11111111-1",
                "1162870692",
                "n@gmail.com",
                "Lavalle 123",
                "Florencio Varela",
                Province.Cordoba
        );
        service.save(client);
        assertThrows(CuitException.class, () -> service.save(client1));
    }

    @AfterEach
    void tearDown() {
        resetService.resetAll();
    }
}