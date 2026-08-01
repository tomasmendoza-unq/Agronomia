package com.agro.feature.user.services;

import com.agro.feature.user.contracts.UserAuthenticatorService;
import com.agro.feature.user.domain.User;
import com.agro.feature.user.persistence.daos.UserDAO;
import com.agro.feature.user.persistence.repositories.UserRepository;
import com.agro.shared.entities.UserAuthenticate;
import com.agro.shared.persistence.excepitons.NotFoundEntityException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UserServiceImpl implements UserService, UserAuthenticatorService {
    private UserDAO userDao;

    public UserServiceImpl(UserDAO userDao) {
        this.userDao = userDao;
    }

    @Override
    public UserAuthenticate getCredentialsByEmail(String email) {
        User user = userDao.findByEmail(email).orElseThrow(() -> new NotFoundEntityException("Entidad no encontrada"));
        return new UserAuthenticate(user.getEmail(), user.getRole().toString(), user.getId());
    }

    @Override
    public User save(User user) {
        return userDao.save(user);
    }

    public void clearAll() {
        userDao.deleteAll();
    }
}
