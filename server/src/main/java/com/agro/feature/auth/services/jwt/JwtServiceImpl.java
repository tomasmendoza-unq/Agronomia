package com.agro.feature.auth.services.jwt;

import com.agro.feature.auth.services.userDetails.UserCredentials;
import com.agro.shared.entities.UserAuthenticate;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Service
public class JwtServiceImpl implements JwtService {

    @Value("${jwt.secret}")
    private String key;

    private Key getKey() {
        return Keys.hmacShaKeyFor(key.getBytes());
    }

    @Override
    public String generate(UserCredentials credentials) {
        return Jwts.builder()
                .claims(claims(credentials))
                .signWith(getKey())
                .compact();
    }

    @Override
    public UserCredentials validate(String token) {
        return null;
    }

    private Map<String, Object> claims(UserCredentials credentials) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("sub", credentials.getId().toString());
        claims.put("name", credentials.getName());
        claims.put("role", credentials.getRole());
        claims.put("iat", new Date());
        claims.put("exp", new Date(System.currentTimeMillis() + 30 * 60 * 1000));
        claims.put("jti", UUID.randomUUID().toString());
        return claims;
    }
}
