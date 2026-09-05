package com.agro.shared.valueObjects.cuit;

import com.agro.shared.entities.errorMotives.ErrorMotive;
import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public class CuitValue
{
    @Column(name = "cuit", unique = true)
    private String cuit;

    protected CuitValue() {}

    public CuitValue(String value) {
        validate(value);
    }

    private void validate(String value) {
        if(!isOnlyNumber(value)) {
            throw new CuitException("El Cuit debe tener solo números", ErrorMotive.CUIT_FORMAT);
        }
        else if(!isValidLength(value)) {
            throw new CuitException("El Cuit debe tener 11 números", ErrorMotive.CUIT_FORMAT);
        }
        this.cuit = value;
    }

    private Boolean isValidLength(String value) {
        return value.replace("-", "").matches("[0-9]{11}");
    }

    private Boolean isOnlyNumber(String value) {
        return value.matches("[0-9]{2}-[0-9]{8}-[0-9]");
    }

    public String get() {
        return cuit;
    }
}
