package com.agro.feature.auth.services.jwt;

import com.agro.feature.auth.services.jwt.exceptions.AuthenticationException;
import com.agro.feature.auth.services.userDetails.UserCredentials;
import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.security.Key;
import java.util.*;

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

    @Override
    public Long validate(String token) {
        try {
            Jws<Claims> claims = getClaims(token);
            return claims.getPayload().get("sub", Long.class);
        }
        catch(ExpiredJwtException e) {
            throw new AuthenticationException("El token se encuentra expirado");
        }
        catch(MalformedJwtException | IllegalArgumentException e) {
            throw new AuthenticationException("El token está mal formado");
        }
        catch(UnsupportedJwtException e) {
            throw new AuthenticationException("El formato del token no es soportado");
        }
        catch(StringIndexOutOfBoundsException | NullPointerException e) {
            throw new AuthenticationException("El token se encuentra vacio");
        }
    }

    private Jws<Claims> getClaims(String token) {
        return Jwts.parser().
                verifyWith((SecretKey) getKey()).
                build().
                parseSignedClaims(token);
    }
}
