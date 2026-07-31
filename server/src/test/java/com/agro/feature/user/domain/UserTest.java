package com.agro.feature.user.domain;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class UserTest {

    private User user;

    @BeforeEach
    void setUp() {
        user = new User("Nicolás Fernando Bossi", "admin", "n@gmail.com");
    }

    @Test
    void testUnUsuarioTieneUnMail() {
        assertEquals(user.getMail(), "n@gmail.com");
    }
}