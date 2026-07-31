package com.agro.feature.user.domain.valueObjects;


import com.agro.feature.user.domain.exceptions.EmailException;

public class EmailValue {
    private String value;

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
