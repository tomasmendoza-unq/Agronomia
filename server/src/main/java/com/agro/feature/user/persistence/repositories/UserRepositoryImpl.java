package com.agro.feature.user.persistence.repositories;

import com.agro.feature.user.persistence.daos.UserDAO;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepositoryImpl implements UserRepository {
    private UserDAO userDao;

    public UserRepositoryImpl(UserDAO userDao) {
        this.userDao = userDao;
    }
}
