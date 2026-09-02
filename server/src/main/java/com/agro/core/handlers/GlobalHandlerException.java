package com.agro.core.handlers;

import com.agro.core.api.Api;
import com.agro.shared.dtos.error.CauseError;
import com.agro.shared.dtos.error.RestErrorResponse;
import com.agro.shared.exceptions.BusinessException;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
@Slf4j
public class GlobalHandlerException {

    @ExceptionHandler(BusinessException.class)
    public ResponseEntity<RestErrorResponse> handleBusinessException(
            BusinessException exception,
            HttpServletRequest request
    ) {
        log.warn("Business rule violation - URI: {} | Message: {}", request.getRequestURI(), exception.getMessage());
        RestErrorResponse error = new RestErrorResponse(
                "Regla de negocio violada",
                exception.getMessage(),
                Api.USER + Api.REGISTER,
                CauseError.BUSINESS_RULE_VIOLATION
        );
        return ResponseEntity.badRequest().body(error);
    }
}
