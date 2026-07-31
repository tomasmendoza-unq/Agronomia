package com.agro.feature.user.domain;

import com.agro.feature.user.domain.valueObjects.EmailValue;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import org.jspecify.annotations.Nullable;

@Entity
@Setter(AccessLevel.PRIVATE)
public class User {

    @Id
    @GeneratedValue
    @Getter
    private Long id;

    private String name;
    @Getter
    private Role role;
    private EmailValue email;

    public User(String name, Role role, String email) {
        setName(name);
        setEmail(new EmailValue((email)));
        setRole(role);
    }

    public String getEmail() {
        return this.email.get();
    }
}
