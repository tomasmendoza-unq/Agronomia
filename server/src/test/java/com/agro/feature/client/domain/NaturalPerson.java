package com.agro.feature.client.domain;

import com.agro.shared.entities.province.Province;
import jakarta.persistence.Entity;

@Entity
public class NaturalPerson extends Client {
    public NaturalPerson(
            String name,
            String surname,
            String cuit,
            String phone,
            String address,
            String location,
            Province province) {
        super(cuit, address, location, province);
    }
}
