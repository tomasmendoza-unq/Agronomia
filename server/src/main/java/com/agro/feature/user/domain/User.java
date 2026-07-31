package com.agro.feature.user.domain;

import jakarta.persistence.Entity;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter(AccessLevel.PRIVATE)
@Getter
public class User {

    private String name;
    private String role;
    private String mail;

    public User(String name, String role, String mail) {
        setName(name);
        setMail(mail);
        setRole(role);
    }
}
