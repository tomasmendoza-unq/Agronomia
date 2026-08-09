package com.agro.feature.email.templates.service.service.impl;

import com.agro.feature.email.templates.service.service.EmailTemplateService;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import java.time.Year;
import java.util.Map;

@Service
public class EmailTemplateServiceImpl implements EmailTemplateService {

    private final TemplateEngine templateEngine;

    public EmailTemplateServiceImpl(TemplateEngine templateEngine) {
        this.templateEngine = templateEngine;
    }

    public String render(String templateName, Map<String, Object> variables) {
        Context context = new Context();
        context.setVariables(variables);
        context.setVariable("year", Year.now().getValue());
        context.setVariable("templateName", templateName);

        return templateEngine.process("emails/layout/base-email", context);
    }
}