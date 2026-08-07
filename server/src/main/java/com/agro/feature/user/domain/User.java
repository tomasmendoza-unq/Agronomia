package com.agro.feature.user.domain;

import com.agro.feature.company.domain.Company;
import com.agro.feature.user.domain.valueObjects.EmailValue;
import com.agro.shared.entities.rol.Role;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.util.UUID;

@Entity
@Table(name = "users")
@Inheritance(strategy = InheritanceType.JOINED)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Setter(AccessLevel.PRIVATE)
@SuperBuilder(toBuilder = true)
public class User {

    @Id
    @GeneratedValue
    @Getter
    private Long id;

    @Getter
    private String name;

    @Getter
    private Role role;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
    @Getter
    private Company company;

    @Embedded
    @AttributeOverride(name = "value", column = @Column(name = "email", unique = true))
    private EmailValue email;

    @Getter
    private String password;

    public User(String name, Role role, String email, String password) {
        setName(name);
        setEmail(new EmailValue((email)));
        setRole(role);
        setPassword(password);
    }

    public String getEmail() {
        return this.email.get();
    }

    public void addEncriptedPassword(String encripted) {
        setPassword(encripted);
    }

    public void generateTemporalPassword() {
        String uuid = UUID.randomUUID().toString();
        setPassword(uuid);
    }

    public void addCompany(Company company) {
        setCompany(company);
    }

    public String getLogo() {
        return getCompany().getLogo();
    }

    public String getNameRol() {
        return role.getNombre();
    }
}
