package com.agro.feature.user.services;

import com.agro.feature.user.contracts.UserCredentialsService;
import com.agro.feature.user.domain.User;
import com.agro.feature.user.persistence.daos.UserDAO;
import com.agro.shared.entities.UserAuthenticate;
import com.agro.shared.persistence.excepitons.NotFoundEntityException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UserServiceImpl implements UserService, UserCredentialsService {
    private UserDAO userDao;
    private PasswordEncoder encoder;

    public UserServiceImpl(UserDAO userDao, PasswordEncoder encoder) {
        this.userDao = userDao;
        this.encoder = encoder;
    }

    @Override
    public UserAuthenticate getCredentialsByEmail(String email) {
        User user = userDao.findByEmail(email).orElseThrow(() -> new NotFoundEntityException("Entidad no encontrada"));
        return new UserAuthenticate(user.getEmail(), user.getPassword(), user.getRole().toString(), user.getName(), user.getId());
    }

    @Override
    public User save(User user) {
        String encripted = encoder.encode(user.getPassword());
        user.addEncriptedPassword(encripted);
        return userDao.save(user);
    }

    public void clearAll() {
        userDao.deleteAll();
    }
}
