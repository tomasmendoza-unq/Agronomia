package com.agro.feature.email.service.impl;

import com.agro.feature.email.contracts.EmailSendRegister;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;

@Profile("test")
@Service
public class EmailServiceTestImpl implements EmailSendRegister {
    @Override
    public void sendRegister(String nameUser, String email, String password, String nameCompany) {

    }
}
