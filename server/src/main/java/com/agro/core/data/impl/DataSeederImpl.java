package com.agro.core.data.impl;

import com.agro.feature.branch.domain.Branch;
import com.agro.feature.company.domain.Company;
import com.agro.feature.image.domain.Imagen;
import com.agro.feature.provider.domain.Provider;
import com.agro.feature.provider.domain.Traveler;
import com.agro.feature.provider.service.ProviderService;
import com.agro.feature.user.domain.User;
import com.agro.feature.user.domain.valueObjects.EmailValue;
import com.agro.feature.user.services.UserService;
import com.agro.core.data.DataSeeder;
import com.agro.shared.entities.rol.Role;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@Profile("dev")
public class DataSeederImpl implements DataSeeder {

    private final UserService userService;
    private final ProviderService providerService;

    public DataSeederImpl(UserService userService, ProviderService providerService) {
        this.userService = userService;
        this.providerService = providerService;
    }

    @Override
    public void run(String... args) throws Exception {
        Branch branch = Branch.builder()
                .city("Berlin")
                .direction("street 123")
                .build();

        Branch branch2 = Branch.builder()
                .city("Argentina")
                .direction("street 123")
                .build();

        Branch branch3 = Branch.builder()
                .city("Berlin")
                .direction("street 123")
                .build();

        Branch branch4 = Branch.builder()
                .city("Argentina")
                .direction("street 123")
                .build();

        User user = User.builder()
                .name("Tomas")
                .surname("Mendoza")
                .email(new EmailValue("n2n@gmail.com"))
                .branch(branch)
                .role(Role.DUENIO)
                .password("123")
                .build();

        Imagen imagen = Imagen.builder()
                .url("https://res.cloudinary.com/dvkvlpq07/image/upload/v1785440325/logo_tfzoil.jpg")
                .publicId("123123")
                .build();

        Company company = Company.builder()
                .name("AgroTech")
                .legalName("AgroTech S.A.")
                .cuit("30-12345678-9")
                .branches(new ArrayList<>(List.of(branch2, branch, branch3, branch4)))
                .users(new ArrayList<>(List.of(user)))
                .logo(imagen)
                .build();

        user.addCompany(company);

        userService.save(user);

        Traveler traveler1 = Traveler.builder()
                .fullName("Carlos Gomez")
                .phoneNumber("11-2233-4455")
                .build();

        Provider provider1 = Provider.builder()
                .tradeName("Agroinsumos del Sur")
                .legalName("Agroinsumos del Sur S.R.L.")
                .cuit("30-87654321-0")
                .phoneNumber("11-4444-5555")
                .companyId(company.getId())
                .traveler(traveler1)
                .listPrices(new ArrayList<>(List.of(1500, 2300, 3100)))
                .build();

        Traveler traveler2 = Traveler.builder()
                .fullName("Carlos Gomez")
                .phoneNumber("11-5566-7788")
                .build();

        Provider provider2 = Provider.builder()
                .tradeName("Insumos Pampa")
                .legalName("Insumos Pampa S.A.")
                .cuit("30-11223344-5")
                .phoneNumber("11-9999-8888")
                .companyId(company.getId())
                .traveler(traveler2)
                .listPrices(new ArrayList<>(List.of(800, 950)))
                .build();


        Provider provider3 = Provider.builder()
                .tradeName("Insumos Pampa 2")
                .legalName("Insumos Pampa S.A. 2")
                .cuit("30-11223344-5")
                .phoneNumber("11-9999-8888")
                .companyId(company.getId())
                .listPrices(new ArrayList<>(List.of(800, 950)))
                .build();


        providerService.save(provider1);
        providerService.save(provider2);
        providerService.save(provider3);
    }
}