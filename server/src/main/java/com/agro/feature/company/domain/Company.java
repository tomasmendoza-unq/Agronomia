package com.agro.feature.company.domain;

import com.agro.feature.branch.domain.Branch;
import com.agro.feature.image.domain.Imagen;
import com.agro.feature.user.domain.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Entity
@Table(name = "companys")
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    private String legalName;

    private String cuit;

    @OneToOne(cascade = CascadeType.ALL)
    private Imagen logo;

    @OneToMany(mappedBy = "company", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Branch> branches = new ArrayList<>();

    @OneToMany(mappedBy = "company", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @Builder.Default
    private List<User> users = new ArrayList<>();

    public void addUser(User user) {
        users.add(user);
        user.addCompany(this);
    }

    public void update(Company model) {
        this.name = model.getName();
        this.legalName = model.getLegalName();
        this.cuit = model.getCuit();
        this.logo = model.getLogo();
    }
}