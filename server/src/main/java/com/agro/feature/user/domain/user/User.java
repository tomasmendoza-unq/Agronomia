package com.agro.feature.user.domain.user;

import jakarta.persistence.Entity;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter(AccessLevel.PRIVATE)
public class User {

    private String name;
    private String role;
    private EmailValue email;

    public User(String name, String role, String email) {
        setName(name);
        setEmail(new EmailValue((email)));
        setRole(role);
    }

    public String geEmail() {
        return this.email.get();
    }
}
