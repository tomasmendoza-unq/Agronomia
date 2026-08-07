package com.agro.feature.company.controller;

import com.agro.feature.company.contracts.CompanyDataService;

import com.agro.feature.company.domain.Company;
import com.agro.feature.company.dtos.response.CompanyResponse;
import com.agro.feature.user.dtos.response.UserResponseSimple;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
@RequestMapping("/company")
public class CompanyControllerREST {

    private final CompanyDataService companyDataService;

    public CompanyControllerREST(CompanyDataService companyDataService) {
        this.companyDataService = companyDataService;
    }

    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<CompanyResponse> getCompany(@RequestAttribute("userId") Long  userId) {
        Company company = companyDataService.getCompanyByUserId(userId);

        return ResponseEntity.ok(CompanyResponse.fromModel(company));
    }
}
