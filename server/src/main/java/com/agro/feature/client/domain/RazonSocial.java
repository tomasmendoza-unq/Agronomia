package com.agro.feature.client.domain;

import com.agro.shared.entities.province.Province;
import com.agro.shared.valueObjects.email.EmailValue;
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

    private EmailValue associateEmail;

    public RazonSocial(
            String razon,
            String associateName,
            String associateSurname,
            String associatePhone,
            String associateEmail,
            String cuit,
            String address,
            String location,
            Province province) {
        super(cuit, address, location, province);
        this.razonSocial = razon;
        this.associateName = associateName;
        this.associateSurname = associateSurname;
        this.associatePhone = associatePhone;
        this.associateEmail = new EmailValue(associateEmail);
    }

    public RazonSocial(
            String razon,
            String associateName,
            String associateSurname,
            String associatePhone,
            String cuit,
            String address,
            String location,
            Province province) {
        super(cuit, address, location, province);
        this.razonSocial = razon;
        this.associateName = associateName;
        this.associateSurname = associateSurname;
        this.associatePhone = associatePhone;
    }

    public String getEmail() {
        return associateEmail.get();
    }
}
