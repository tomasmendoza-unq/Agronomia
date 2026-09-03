package com.agro.core.data.impl;

import com.agro.feature.branch.domain.Branch;
import com.agro.feature.company.domain.Company;
import com.agro.feature.image.domain.Imagen;
import com.agro.feature.provider.domain.PaymentMethod;
import com.agro.feature.provider.domain.Provider;
import com.agro.feature.provider.domain.Traveler;
import com.agro.feature.provider.service.ProviderService;
import com.agro.feature.user.domain.User;

import com.agro.feature.user.services.UserService;
import com.agro.core.data.DataSeeder;
import com.agro.shared.entities.rol.Role;
import com.agro.shared.valueObjects.email.EmailValue;
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
                .users(new ArrayList<>(List.of(user)))
                .logo(imagen)
                .build();

        company.addBranches(new ArrayList<>(List.of(branch2, branch, branch3, branch4)));

        user.addCompany(company);

        userService.save(user);

       // createProviders(company.getId());
    }

    private void createProviders(Long companyId) {
        List<Provider> providers = List.of(
                Provider.builder()
                        .tradeName("Agroinsumos del Sur")
                        .legalName("Agroinsumos del Sur S.R.L.")
                        .cuit("30-87654321-0")
                        .phoneNumber("11-4444-5555")
                        .companyId(companyId)
                        .paymentMethods(new ArrayList<>(List.of(PaymentMethod.MERCADO_PAGO, PaymentMethod.EFECTIVO)))
                        .traveler(Traveler.builder()
                                .fullName("Carlos Gomez")
                                .phoneNumber("11-2233-4455")
                                .build())
                        .listPrices(new ArrayList<>(List.of(1500, 2300, 3100)))
                        .build(),

                Provider.builder()
                        .tradeName("Insumos Pampa")
                        .legalName("Insumos Pampa S.A.")
                        .cuit("30-11223344-5")
                        .phoneNumber("11-9999-8888")
                        .companyId(companyId)
                        .paymentMethods(new ArrayList<>(List.of(PaymentMethod.MERCADO_PAGO, PaymentMethod.EFECTIVO)))
                        .traveler(Traveler.builder()
                                .fullName("Carlos Gomez")
                                .phoneNumber("11-5566-7788")
                                .build())
                        .listPrices(new ArrayList<>(List.of(800, 950)))
                        .build(),

                Provider.builder()
                        .tradeName("Insumos Pampa 2")
                        .legalName("Insumos Pampa S.A. 2")
                        .cuit("30-11223344-6")
                        .phoneNumber("11-9999-8888")
                        .paymentMethods(new ArrayList<>(List.of(PaymentMethod.MERCADO_PAGO)))
                        .companyId(companyId)
                        .listPrices(new ArrayList<>(List.of(800, 950)))
                        .build(),

                Provider.builder()
                        .tradeName("Claas Argentina")
                        .legalName("Claas Argentina S.A.")
                        .cuit("30-70928156-3")
                        .phoneNumber("+54 3492 44-0600")
                        .companyId(companyId)
                        .traveler(Traveler.builder()
                                .fullName("Federico Álvarez")
                                .phoneNumber("+54 9 3492 51-2290")
                                .build())
                        .listPrices(new ArrayList<>(List.of(4200, 5100, 6300, 7000)))
                        .build(),

                Provider.builder()
                        .tradeName("Agrometal")
                        .legalName("Agrometal S.A.I.C.")
                        .cuit("30-54892371-6")
                        .phoneNumber("351-4567-890")
                        .companyId(companyId)
                        .paymentMethods(new ArrayList<>(List.of(PaymentMethod.MERCADO_PAGO, PaymentMethod.EFECTIVO)))
                        .traveler(Traveler.builder()
                                .fullName("Lucía Fernández")
                                .phoneNumber("351-6789-012")
                                .build())
                        .listPrices(new ArrayList<>(List.of(2100, 2900)))
                        .build(),

                Provider.builder()
                        .tradeName("Pauny")
                        .legalName("Pauny Sociedad Anónima")
                        .cuit("30-70839658-4")
                        .phoneNumber("358-465-1122")
                        .companyId(companyId)
                        .build(),

                Provider.builder()
                        .tradeName("Vassalli Fabril")
                        .legalName("Vassalli Fabril S.A.")
                        .cuit("30-53821046-9")
                        .phoneNumber("341-762-3344")
                        .companyId(companyId)
                        .paymentMethods(new ArrayList<>(List.of(PaymentMethod.MERCADO_PAGO, PaymentMethod.EFECTIVO)))
                        .traveler(Traveler.builder()
                                .fullName("Martín Suárez")
                                .phoneNumber("341-889-5566")
                                .build())
                        .listPrices(new ArrayList<>(List.of(1800, 2400, 3000)))
                        .build(),

                Provider.builder()
                        .tradeName("Metalfor")
                        .legalName("Metalfor S.A.")
                        .cuit("30-61234789-2")
                        .paymentMethods(new ArrayList<>(List.of(PaymentMethod.MERCADO_PAGO, PaymentMethod.EFECTIVO)))
                        .phoneNumber("358-421-7788")
                        .companyId(companyId)
                        .build(),

                Provider.builder()
                        .tradeName("Apache Semillas")
                        .legalName("Apache Semillas S.A.")
                        .cuit("30-68974512-1")
                        .phoneNumber("341-556-9900")
                        .companyId(companyId)
                        .paymentMethods(new ArrayList<>(List.of(PaymentMethod.MERCADO_PAGO, PaymentMethod.EFECTIVO)))
                        .traveler(Traveler.builder()
                                .fullName("Sofía Ramírez")
                                .phoneNumber("341-334-1122")
                                .build())
                        .listPrices(new ArrayList<>(List.of(950, 1300, 1750, 2200)))
                        .build(),

                Provider.builder()
                        .tradeName("Don Mario Semillas")
                        .legalName("Don Mario Semillas S.A.")
                        .cuit("30-59873421-8")
                        .paymentMethods(new ArrayList<>(List.of(PaymentMethod.MERCADO_PAGO, PaymentMethod.EFECTIVO)))
                        .phoneNumber("3401-445-6677")
                        .companyId(companyId)
                        .build()
        );

        providers.forEach(providerService::save);
    }
}