package com.agro.feature.user.dtos;

import com.agro.feature.auth.dtos.AuthMapper;
import com.agro.feature.user.domain.User;
import com.agro.feature.user.dtos.request.UserRequest;
import com.agro.feature.user.dtos.response.UserResponse;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface UserMapper {

    AuthMapper INSTANCE = Mappers.getMapper(AuthMapper.class);

    UserResponse modelToDto(User user);

    User dtoToModel(UserRequest request);

}
