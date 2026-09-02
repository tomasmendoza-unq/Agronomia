package com.agro.feature.client.domain;

import com.agro.shared.entities.province.Province;
import com.agro.shared.valueObjects.email.EmailValue;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import lombok.Getter;

@Entity
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

    public RazonSocial(
            String razon,
            String associateName,
            String associateSurname,
            String associatePhone,
            String email,
            String cuit,
            String address,
            String location,
            Province province) {
        super(cuit, address, location, province);
        this.razonSocial = razon;
        this.associateName = associateName;
        this.associateSurname = associateSurname;
        this.associatePhone = associatePhone;
        this.email = new EmailValue(email);
    }

    public String getEmail() {
        return email.get();
    }
}
