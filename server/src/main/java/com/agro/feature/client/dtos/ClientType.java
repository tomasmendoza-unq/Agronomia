package com.agro.feature.client.dtos;

public enum ClientType {
    NATURAL_PERSON("NATURAL_PERSON"),
    RAZON_SOCIAL("RAZON_SOCIAL");

    private final String nombre;

    ClientType(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() {
        return nombre;
    }
}
