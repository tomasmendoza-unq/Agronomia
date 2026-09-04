package com.agro.feature.email.contracts;

public interface EmailSendRegister {
    public void sendRegister(String nameUser, String email, String password, String nameCompany);
}
