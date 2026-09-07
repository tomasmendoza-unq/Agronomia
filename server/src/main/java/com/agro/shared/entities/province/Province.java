package com.agro.shared.entities.province;

import java.util.Arrays;
import java.util.Map;
import java.util.stream.Collectors;

public enum Province {
    BuenosAires("Buenos Aires"),
    Catamarca("Catamarca"),
    Chaco("Chaco"),
    Chubut("Chubut"),
    Cordoba("Cordoba"),
    Corrientes("Corrientes"),
    EntreRios("Entre Rios"),
    Formosa("Formosa"),
    Jujuy("Jujuy"),
    LaPampa("La Pampa"),
    LaRioja("La Rioja"),
    Mendoza("Mendoza"),
    Misiones("Misiones"),
    Neuquen("Neuquen"),
    RioNegro("Rio Negro"),
    Salta("Salta"),
    SanJuan("San Juan"),
    SanLuis("San Luis"),
    SantaCruz("Santa Cruz"),
    SantaFe("Santa Fe"),
    SantiagoDelEstero("Santiago Del Estero"),
    TierraDelFuego("Tierra Del Fuego"),
    Tucuman("Tucuman");

    private final String label;

    Province(String label) {
        this.label = label;
    }

    public String getLabel() {
        return label;
    }

    private static final Map<String, Province> BY_LABEL = Arrays.stream(values())
            .collect(Collectors.toMap(Province::getLabel, p -> p));

    public static Province fromLabel(String label) {
        Province province = BY_LABEL.get(label);
        if (province == null) {
            throw new IllegalArgumentException("Provincia inválida: " + label);
        }
        return province;
    }
}