package com.agro.feature.auth.dtos;

import com.agro.feature.auth.domain.Auth;
import org.jspecify.annotations.Nullable;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper
public interface AuthMapper {

    AuthMapper INSTANCE = Mappers.getMapper(AuthMapper.class);

    AuthResponse modelToDto(Auth auth);
}
