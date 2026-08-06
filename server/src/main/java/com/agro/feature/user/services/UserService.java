package com.agro.feature.user.services;

import com.agro.feature.user.domain.User;
import org.springframework.data.domain.Page;

public interface UserService {
    User save(User user);

    Page<User> findAll(int page, int size);

    boolean existsByEmail(String email);
}
