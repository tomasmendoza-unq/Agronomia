package com.agro.feature.client.domain;

import com.agro.shared.entities.province.Province;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class RazonSocialTest {

    private RazonSocial client;

    @BeforeEach
    void setUp() {
        client = new RazonSocial(
                "MAC EMPRECITA",
                "Nicolas",
                "Bossi",
                "1162870692",
                "n@gmail.com",
                "11-11111111-1",
                "Lavalle 123",
                "Florencio Varela",
                Province.Cordoba
        );
    }

    @Test
    void testSeObtieneLaInformacionDeUnaPersonaNatural() {
        assertEquals("MAC EMPRECITA", client.getRazonSocial());
    }
}