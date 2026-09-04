package com.agro.shared.entities.rol;

public enum Role {
    DUENIO("Dueño"),
    FACTURACION("Facturación"),
    VENDEDOR("Vendedor"),
    ADMINISTRADOR("Administrador");

    private final String nombre;

    Role(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() {
        return nombre;
    }
}