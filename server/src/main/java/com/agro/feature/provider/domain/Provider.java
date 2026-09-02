package com.agro.feature.provider.domain;

import com.agro.shared.valueObjects.cuit.CuitValue;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Data
@Entity
@Table(name = "providers")
public class Provider {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String tradeName;

    private String legalName;

    @Embedded
    private CuitValue cuit;

    private String phoneNumber;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Traveler traveler;

    @Column(name = "company_id", nullable = false)
    private Long companyId;

    private List<PaymentMethod> paymentMethods = new ArrayList<>();

    private List<Integer> listPrices = new ArrayList<>();

    @Builder
    public Provider(String tradeName, String legalName, String cuit, String phoneNumber,
                    Traveler traveler, Long companyId,
                    List<PaymentMethod> paymentMethods, List<Integer> listPrices) {
        this.tradeName = tradeName;
        this.legalName = legalName;
        this.cuit = new CuitValue(cuit);
        this.phoneNumber = phoneNumber;
        this.traveler = traveler;
        this.companyId = companyId;
        this.paymentMethods = (paymentMethods != null) ? paymentMethods : new ArrayList<>();
        this.listPrices = (listPrices != null) ? listPrices : new ArrayList<>();
    }

    public List<String> getPaymentMethods() {
        return paymentMethods.stream().map(PaymentMethod::getValue).toList();
    }

    public void update(Provider provider) {
        this.phoneNumber = provider.getPhoneNumber();
        this.traveler = provider.getTraveler();
    }
}