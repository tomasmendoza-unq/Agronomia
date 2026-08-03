package com.agro.feature.company.domain;

import com.agro.feature.user.domain.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

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

    private String logo;

    @OneToMany(fetch = FetchType.EAGER,  cascade = CascadeType.ALL)
    private List<User> users;
}
