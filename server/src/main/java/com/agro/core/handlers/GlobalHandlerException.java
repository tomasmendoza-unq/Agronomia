package com.agro.core.handlers;

import com.agro.core.api.Api;
import com.agro.shared.dtos.error.CauseError;
import com.agro.shared.dtos.error.RestErrorResponse;
import com.agro.shared.exceptions.BusinessException;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.List;

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

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<List<ErrorResponse>> bodyError(MethodArgumentNotValidException exeption, BindingResult errorResult) {
        List<ErrorResponse> errors =  errorResult.getFieldErrors().stream().map(error -> new ErrorResponse(error.getField(), error.getDefaultMessage())).toList();
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
    }

    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<ErrorResponse> parseJsonError(HttpMessageNotReadableException exeption) {
        ErrorResponse error = new ErrorResponse(exeption.getCause().getMessage(), exeption.getMessage());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
    }
}
