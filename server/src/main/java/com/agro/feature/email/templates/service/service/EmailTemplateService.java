package com.agro.feature.email.templates.service.service;

import java.util.Map;

public interface EmailTemplateService {
    String render(String welcome, Map<String, Object> variables);
}
