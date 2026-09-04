package com.agro.feature.client.domain;

import com.agro.shared.entities.province.Province;
import com.agro.shared.valueObjects.email.EmailValue;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@DiscriminatorValue("RAZON_SOCIAL")
public class RazonSocial extends Client{

    @Getter
    private String razonSocial;

    @Getter
    private String associateName;

    @Getter
    private String associateSurname;

    @Getter
    private String associatePhone;

    @Embedded
    private EmailValue email;

    protected RazonSocial() {}

    public RazonSocial(
            String razonSocial,
            String associateName,
            String associateSurname,
            String associatePhone,
            String email,
            String cuit,
            String address,
            String location,
            Province province) {
        super(cuit, address, location, province);
        this.razonSocial = razonSocial;
        this.associateName = associateName;
        this.associateSurname = associateSurname;
        this.associatePhone = associatePhone;
        this.email = new EmailValue(email);
    }

    public String getEmail() {
        return email.get();
    }

    @Override
    protected String computeSortKey() {
        return razonSocial;
    }

    @Override
    protected String computeSearchKey() {
        return razonSocial + " " + associateName + " " + associateSurname;
    }
}
