package com.agro.shared.annotations.constraints;

import com.agro.shared.annotations.constraints.impl.ValidPhoneValidator;
import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target({ElementType.FIELD, ElementType.PARAMETER})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = ValidPhoneValidator.class)
public @interface ValidPhone {
    String message() default "El número de teléfono no es válido";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
    String region() default "AR";
}