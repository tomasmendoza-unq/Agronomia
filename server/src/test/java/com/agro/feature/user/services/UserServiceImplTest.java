package com.agro.feature.user.services;

import com.agro.core.ContainerPostgresql;
import com.agro.shared.entities.rol.Role;
import com.agro.feature.user.domain.User;
import com.agro.feature.user.persistence.daos.UserDAO;
import com.agro.feature.user.persistence.repositories.UserRepository;
import com.agro.shared.entities.userAuthenticate.UserAuthenticate;
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
class UserServiceImplTest {
    @Container
    private static PostgreSQLContainer postgres = ContainerPostgresql.getContainer();

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserDAO userDao;

    @Autowired
    private UserServiceImpl service;

    private User user;

    @BeforeEach
    void setUp() {
        user = new User("Nicolás Fernando Bossi", Role.VISITANT, "n@gmail.com", "aa");
    }

    @Test
    void testSeAgregaUnUsuario() {
        User addedUser = service.save(user);
        assertNotNull(addedUser.getId());
    }

    @Test
    void testSeBuscaLasCredencialesDeUnUsuarioPorSuMail() {
        service.save(user);
        UserAuthenticate addedUser = service.getCredentialsByEmail(user.getEmail());
        assertEquals(user.getEmail(), addedUser.email());
        assertEquals(user.getId(), addedUser.id());
        assertEquals(user.getRole().toString(), addedUser.role());
    }

    @BeforeEach
    void tearDown() {
        service.clearAll();
    }
}