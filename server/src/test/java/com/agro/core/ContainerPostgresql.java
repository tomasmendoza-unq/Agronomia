package com.agro.core;

import org.testcontainers.postgresql.PostgreSQLContainer;

public final class ContainerPostgresql {

    public static PostgreSQLContainer getContainer() {
        return new PostgreSQLContainer("postgres:18.4-alpine")
                .withDatabaseName("agro-integration-test")
                .withUsername("postgres")
                .withPassword("root");
    }
}
