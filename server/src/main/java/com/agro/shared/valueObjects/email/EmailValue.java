package com.agro.shared.valueObjects.email;


import com.agro.shared.entities.errorMotives.ErrorMotive;
import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public class EmailValue {

    @Column(name = "email", unique = true)
    private String email;

    protected EmailValue() {}

    public EmailValue(String value) {
        validate(value);
    }

    private void validate(String email) {
        if(isNotArroba(email)) {
            throw new EmailException(ErrorMotive.NOT_ARROBA);
        }
        this.email = email;
    }

    private Boolean isNotArroba(String email) {
        return !email.contains("@");
    }

    public String get() {
        return email;
    }
}
