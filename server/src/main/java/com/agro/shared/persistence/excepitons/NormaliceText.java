package com.agro.shared.persistence.excepitons;

import java.text.Normalizer;

public class NormaliceText {

    public static String normalize(String input) {
        String withoutAccents = Normalizer.normalize(input, Normalizer.Form.NFD)
                .replaceAll("\\p{M}", "");
        return withoutAccents.toLowerCase().trim();
    }
}
