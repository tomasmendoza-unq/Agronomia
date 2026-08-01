package com.agro.feature.user.domain;

import com.agro.feature.user.domain.valueObjects.EmailValue;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "users")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Setter(AccessLevel.PRIVATE)
public class User {

    @Id
    @GeneratedValue
    @Getter
    private Long id;

    @Getter
    private String name;

    @Getter
    private Role role;

    @Embedded
    @AttributeOverride(name = "value", column = @Column(name = "email"))
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
