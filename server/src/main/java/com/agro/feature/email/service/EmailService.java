package com.agro.feature.email.service;

import com.agro.feature.user.domain.User;

public interface EmailService {
    public void sendAccountTemporalEmail(String nameUser, String email, String password, String nameCompany);
}
