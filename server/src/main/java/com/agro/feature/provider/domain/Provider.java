package com.agro.feature.provider.domain;

import com.agro.feature.company.domain.Company;
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
@Table(name = "providers")
public class Provider {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String tradeName;

    private String legalName;

    private String cuit;

    private String phoneNumber;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Traveler traveler;

    @Column(name = "company_id", nullable = false)
    private Long companyId;

    private List<Integer> listPrices;
}
