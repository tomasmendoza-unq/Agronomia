package com.agro.feature.auth.services.userDetails;

import com.agro.shared.entities.UserAuthenticate;
import lombok.Getter;
import org.jspecify.annotations.Nullable;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class UserCredentials implements UserDetails {

    @Getter
    private String email;

    private String password;

    @Getter
    private String role;

    @Getter
    private String name;

    @Getter
    private Long id;

    private List<GrantedAuthority> roles = new ArrayList<>();

    public UserCredentials(UserAuthenticate user) {
        this.email = user.email();
        this.password = user.password();
        this.role = user.role();
        this.name = user.name();
        this.id = user.id();
        this.roles.add(new SimpleGrantedAuthority(user.role()));
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return roles;
    }

    @Override
    public @Nullable String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }
}
