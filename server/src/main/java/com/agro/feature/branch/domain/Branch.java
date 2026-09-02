package com.agro.feature.branch.domain;

import com.agro.feature.company.domain.Company;
import com.agro.feature.user.domain.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "branches")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Branch {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String city;

    private String direction;

    @OneToMany(mappedBy = "branch", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<User> employees;

    @ManyToOne
    @JoinColumn(name = "company_id")
    private Company company;

    public String getFullDirection() {
        return city + " - " + direction;
    }
}