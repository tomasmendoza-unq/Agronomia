package com.agro.feature.company.domain.exceptions;

import com.agro.shared.entities.errorMotives.ErrorMotive;
import com.agro.shared.exceptions.BusinessException;

public class IsNotAOwnerOfCompany extends BusinessException {
    public IsNotAOwnerOfCompany(ErrorMotive motive) {
        super("El admin no es dueño de la compañia", motive);
    }
}
