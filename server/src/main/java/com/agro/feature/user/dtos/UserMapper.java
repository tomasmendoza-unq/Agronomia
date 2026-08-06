package com.agro.feature.user.dtos;

import com.agro.feature.user.domain.User;
import com.agro.feature.user.dtos.response.UserWithCompanyLogo;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface UserMapper {
    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    UserWithCompanyLogo toUserWidthCompany(User user);
}
