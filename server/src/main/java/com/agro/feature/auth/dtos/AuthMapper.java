package com.agro.feature.auth.dtos;

import com.agro.feature.auth.domain.Auth;
import com.agro.feature.auth.dtos.response.AuthResponse;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface AuthMapper {

    AuthMapper INSTANCE = Mappers.getMapper(AuthMapper.class);

    AuthResponse modelToDto(Auth auth);
}
