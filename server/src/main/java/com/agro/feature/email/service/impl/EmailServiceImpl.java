package com.agro.feature.email.service.impl;

import com.agro.feature.email.service.EmailService;
import com.agro.feature.email.templates.service.service.EmailTemplateService;
import com.resend.Resend;
import com.resend.core.exception.ResendException;
import com.resend.services.emails.model.CreateEmailOptions;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
@Transactional
public class EmailServiceImpl implements EmailService {
    private final Resend resend;

    @Value("${RESEND_EMAIL}")
    private String from;

    private final EmailTemplateService emailTemplateService;

    public EmailServiceImpl(
            @Value("${resend.api-key}") String apiKey, EmailTemplateService emailTemplateService
    ) {
        this.resend = new Resend(apiKey);
        this.emailTemplateService = emailTemplateService;
    }

    @Override
    public void sendAccountTemporalEmail(String nameUser, String email, String password, String nameCompany) {
        Map<String, Object> variables = Map.of(
                "nombre", nameUser,
                "email", email,
                "password", password,
                "nombreEmpresa", nameCompany
        );

        String html = emailTemplateService.render("welcome", variables);

        sendHtmlEmail(email, "Cuenta temporal", html);
    }

    private void sendHtmlEmail(String to, String subject, String html) {
        try {
            CreateEmailOptions params = CreateEmailOptions.builder()
                    .from(from)
                    .to(to)
                    .subject(subject)
                    .html(html)
                    .build();

            resend.emails().send(params);

        } catch (ResendException e) {
            throw new RuntimeException("Error enviando email", e);
        }
    }
}
