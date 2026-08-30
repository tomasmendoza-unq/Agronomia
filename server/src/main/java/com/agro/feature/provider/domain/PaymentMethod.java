package com.agro.feature.provider.domain;

public enum PaymentMethod {
    MERCADO_PAGO("Mercado pago"),
    EFECTIVO("Efectivo");

    private final String value;

    PaymentMethod(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}