package com.agro.feature.auth.dtos;

import com.agro.feature.auth.domain.Auth;
import com.agro.feature.auth.dtos.response.AuthResponse;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper
public interface AuthMapper {

    AuthMapper INSTANCE = Mappers.getMapper(AuthMapper.class);

    @Mapping(target = "role", resultType = String.class)
    AuthResponse modelToDto(Auth auth);
}
