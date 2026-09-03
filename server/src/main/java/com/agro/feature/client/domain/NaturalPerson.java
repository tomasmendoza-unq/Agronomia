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
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@DiscriminatorValue("NATURAL_PERSON")
public class NaturalPerson extends Client {

    @Getter
    private String name;

    @Getter
    private String surname;

    @Getter
    private String phone;

    @Embedded
    private EmailValue email;

    public NaturalPerson(
            String name,
            String surname,
            String cuit,
            String phone,
            String email,
            String address,
            String location,
            Province province) {
        super(cuit, address, location, province);
        this.name = name;
        this.surname = surname;
        this.phone = phone;
        this.email = new EmailValue(email);
    }

    public String getEmail() {
        return email.get();
    }

    @Override
    protected String computeSortKey() {
        return surname + " " + name;
    }

    @Override
    protected String computeSearchKey() {
        return surname + " " + name;
    }
}
