package com.agro.feature.user.persistence.repositories;

import com.agro.feature.user.domain.User;
import com.agro.feature.user.persistence.daos.UserDAO;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class UserRepositoryImpl implements UserRepository {
    private UserDAO userDao;

    public UserRepositoryImpl(UserDAO userDao) {
        this.userDao = userDao;
    }

    @Override
    public User save(User user) {
        return userDao.save(user);
    }

    @Override
    public User findByEmail(String email) {
        return userDao.findByEmail(email).orElseThrow(RuntimeException::new);
    }
}
