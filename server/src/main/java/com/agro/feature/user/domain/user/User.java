package com.agro.feature.user.domain.user;

import com.agro.feature.user.domain.user.valueObjects.EmailValue;
import jakarta.persistence.Entity;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter(AccessLevel.PRIVATE)
public class User {

    private String name;
    @Getter
    private Role role;
    private EmailValue email;

    public User(String name, Role role, String email) {
        setName(name);
        setEmail(new EmailValue((email)));
        setRole(role);
    }

    public String geEmail() {
        return this.email.get();
    }

}
