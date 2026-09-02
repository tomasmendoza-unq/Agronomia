package com.agro.feature.provider.domain;

import com.agro.shared.exceptions.BusinessException;

public class CUITDuplicatedException extends BusinessException {
    public CUITDuplicatedException(String message) {
        super(message);
    }
}
