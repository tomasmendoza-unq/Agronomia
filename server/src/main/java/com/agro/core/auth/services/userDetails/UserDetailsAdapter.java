package com.agro.core.auth.services.userDetails;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserDetailsAdapter extends UserDetailsService {
    UserDetails loadUserById(Long id);
}
