package com.agro.feature.user.controller;

import com.agro.core.api.Api;
import com.agro.feature.user.domain.User;
import com.agro.feature.user.dtos.request.UserRequest;
import com.agro.feature.user.dtos.response.UserResponseSimple;
import com.agro.feature.user.orchestrator.RegisterOrchestrator;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(Api.USER)
@Tag(name = "Usuarios", description = "Operaciones relacionadas a la gestión de usuarios")
public class UserControllerREST {

    private final RegisterOrchestrator registerOrchestrator;


    public UserControllerREST(RegisterOrchestrator registerOrchestrator) {
        this.registerOrchestrator = registerOrchestrator;
    }

    @PostMapping(Api.REGISTER)
    @Operation(
            summary = "Registrar un usuario",
            description = """
                    Registra un nuevo usuario asociado a una empresa existente. \
                    Se genera automáticamente una contraseña temporal, que el usuario \
                    deberá cambiar en su primer inicio de sesión."""
    )
    @ApiResponses({
            @ApiResponse(
                    responseCode = "200",
                    description = "Usuario registrado correctamente.",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = UserResponseSimple.class)
                    )
            ),
            @ApiResponse(
                    responseCode = "400",
                    description = "Datos de la solicitud inválidos (email malformado, rol inexistente, campos faltantes).",
                    content = @Content(mediaType = "application/json")
            ),
            @ApiResponse(
                    responseCode = "404",
                    description = "No se encontró la empresa indicada por id_company.",
                    content = @Content(mediaType = "application/json")
            ),
            @ApiResponse(
                    responseCode = "409",
                    description = "Ya existe un usuario registrado con ese email.",
                    content = @Content(mediaType = "application/json")
            )
    })
    public ResponseEntity<UserResponseSimple> register(@RequestBody UserRequest request) {
        User user = registerOrchestrator.register(request.toModel(), request.id_company());

        return ResponseEntity.ok(UserResponseSimple.fromModel(user));
    }
}
