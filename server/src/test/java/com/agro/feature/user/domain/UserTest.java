package com.agro.feature.user.domain;

import com.agro.feature.user.domain.user.Role;
import com.agro.feature.user.domain.user.User;
import com.agro.feature.user.domain.user.exceptions.EmailException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class UserTest {

    private User user;

    @BeforeEach
    void setUp() {
        user = new User("Nicolás Fernando Bossi", Role.ADMIN, "n@gmail.com");
    }

    @Test
    void testUnUsuarioTieneUnMail() {
        assertEquals(user.geEmail(), "n@gmail.com");
    }

    @Test
    void testSiElMailNoTieneArroba_HayExcepcion() {
        assertThrows(
                EmailException.class,
                () -> new User("Nicolás Fernando Bossi", Role.ADMIN, "n_gmail.com"));
    }

    @Test
    void testUnUsuarioTieneUnRol() {
        assertEquals(user.getRole(), Role.ADMIN);
    }
}