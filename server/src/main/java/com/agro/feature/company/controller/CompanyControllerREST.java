package com.agro.feature.company.controller;

import com.agro.core.api.Api;
import com.agro.feature.company.contracts.CompanyDataService;

import com.agro.feature.company.domain.Company;
import com.agro.feature.company.dtos.response.CompanyEditDTO;
import com.agro.feature.company.dtos.response.CompanyResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@Slf4j
@RequestMapping(Api.COMPANY)
public class CompanyControllerREST {

    private final CompanyDataService companyDataService;


    public CompanyControllerREST(CompanyDataService companyDataService) {
        this.companyDataService = companyDataService;
    }

    @GetMapping
    @PreAuthorize("hasRole('DUENIO')")
    public ResponseEntity<CompanyResponse> getCompany(@RequestAttribute("userId") Long  userId) {
        Company company = companyDataService.getCompanyByUserId(userId);

        return ResponseEntity.ok(CompanyResponse.fromModel(company));
    }

    @PutMapping
    @PreAuthorize("hasRole('DUENIO')")
    public ResponseEntity<CompanyResponse> editCompany(@RequestAttribute("userId") Long  userId, @RequestBody CompanyEditDTO request) {
        Company company = companyDataService.editCompany(userId, request.toModel(), request.id());

        return ResponseEntity.ok(CompanyResponse.fromModel(company));
    }
}
