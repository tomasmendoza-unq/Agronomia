package com.agro.feature.user.contracts;

import com.agro.feature.user.domain.User;

public interface UserDataService {
    public User getUserById(Long id);
}
