package com.agro.feature.user.persistence.repositories;

import com.agro.core.ContainerPostgresql;
import com.agro.feature.user.domain.Role;
import com.agro.feature.user.domain.User;
import com.agro.feature.user.persistence.daos.UserDAO;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;
import org.testcontainers.postgresql.PostgreSQLContainer;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
@Testcontainers
class UserRepositoryImplTest {

    @Container
    private static PostgreSQLContainer container = ContainerPostgresql.getContainer();;

    @Autowired
    private UserDAO userDao;

    private UserRepositoryImpl repository;

    private User user;

    @BeforeEach
    void setUp() {
        user = new User("Nicolás Fernando Bossi", Role.VISITANT, "n@gmail.com");
    }

    @Test
    void testSeRecuperaUnUsuarioPorSuEmail() {
        repository.save(user);
        User addedUser = repository.findByEmail(user.getEmail());
        assertNotNull(addedUser.getId());
    }
}