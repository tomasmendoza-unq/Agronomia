package com.agro.feature.user.controller;

import com.agro.core.api.Api;
import com.agro.feature.user.domain.User;
import com.agro.feature.user.dtos.UserMapper;
import com.agro.feature.user.dtos.request.UserRequest;
import com.agro.feature.user.dtos.response.UserResponse;
import com.agro.feature.user.orchestrator.RegisterOrchestrator;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(Api.USER)
public class UserControllerREST {

    private final RegisterOrchestrator registerOrchestrator;

    private final UserMapper userMapper;

    public UserControllerREST(RegisterOrchestrator registerOrchestrator, UserMapper userMapper) {
        this.registerOrchestrator = registerOrchestrator;
        this.userMapper = userMapper;
    }

    @PostMapping(Api.REGISTER)
    public ResponseEntity<UserResponse> register(@RequestBody UserRequest request) {
        User user = registerOrchestrator.register(request.toModel(), request.id_company());

        return ResponseEntity.ok(userMapper.modelToDto(user));
    }
}
