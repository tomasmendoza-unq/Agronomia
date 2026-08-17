package com.agro.feature.company.domain.exceptions;

import com.agro.shared.exceptions.BusinessException;

public class IsNotAOwnerOfCompany extends BusinessException {
    public IsNotAOwnerOfCompany() {
        super("El admin no es dueño de la compañia");
    }
}
