package com.agro.core.handlers;

import com.agro.shared.exceptions.BusinessException;
import com.agro.shared.exceptions.dto.ErrorResponse;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
@Slf4j
public class GlobalHandlerException {

    @ExceptionHandler(BusinessException.class)
    public ResponseEntity<ErrorResponse> handleBusinessException(
            BusinessException exception,
            HttpServletRequest request
    ) {
        log.warn("Business rule violation - URI: {} | Message: {}", request.getRequestURI(), exception.getMessage());
        return ErrorResponse.buildResponse(HttpStatus.CONFLICT, exception.getMessage(), request, exception.getMotives());
    }
}
