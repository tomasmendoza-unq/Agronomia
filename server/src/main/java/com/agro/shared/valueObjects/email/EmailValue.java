package com.agro.shared.valueObjects.email;


import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public class EmailValue {

    @Column(name = "value", unique = true)
    private String value;

    protected EmailValue() {}

    public EmailValue(String value) {
        validate(value);
    }

    private void validate(String email) {
        if(isNotArroba(email)) {
            throw new EmailException();
        }
        this.value = email;
    }

    private Boolean isNotArroba(String email) {
        return !email.contains("@");
    }

    public String get() {
        return value;
    }
}
