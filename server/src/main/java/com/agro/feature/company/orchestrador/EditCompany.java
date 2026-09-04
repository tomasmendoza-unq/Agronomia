package com.agro.feature.company.orchestrador;

import com.agro.feature.company.domain.Company;
import org.springframework.web.multipart.MultipartFile;

public interface EditCompany {
    Company execute(Long adminId, Company model, Long id, MultipartFile logo);
}
