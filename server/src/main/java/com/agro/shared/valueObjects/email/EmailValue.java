package com.agro.shared.valueObjects.email;


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
            throw new EmailException();
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
