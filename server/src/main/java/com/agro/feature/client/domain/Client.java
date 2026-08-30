package com.agro.feature.client.domain;

import com.agro.shared.entities.province.Province;
import com.agro.shared.valueObjects.cuit.CuitValue;
import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public abstract class Client {

    @Id
    @GeneratedValue
    @Getter
    private Long id;

    @Embedded
    private CuitValue cuit;

    @Getter
    private String address;

    @Getter
    private String location;

    @Getter
    private Province province;

    public Client(String cuit, String address, String location, Province province) {
        this.cuit = new CuitValue(cuit);
        this.address = address;
        this.location = location;
        this.province = province;
    }

    public String getCuit() {
        return cuit.get();
    }
}
