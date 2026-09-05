package com.agro.feature.client.domain;

import com.agro.shared.entities.province.Province;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Getter;

@Entity
@DiscriminatorValue("NATURAL_PERSON")
public class NaturalPerson extends Client {

    @Getter
    private String name;

    @Getter
    private String surname;

    @Getter
    private String phone;

    protected NaturalPerson() {}

    public NaturalPerson(
            String name,
            String surname,
            String cuit,
            String phone,
            String email,
            String address,
            String location,
            Province province) {
        super(cuit, address, location, province, email);
        this.name = name;
        this.surname = surname;
        this.phone = phone;
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
