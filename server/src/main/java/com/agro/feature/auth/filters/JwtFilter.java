package com.agro.feature.auth.filters;

import com.agro.core.api.Api;
import com.agro.feature.auth.services.jwt.JwtService;
import com.agro.feature.auth.services.authentication.AuthenticateService;
import com.agro.feature.auth.services.userDetails.UserCredentials;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpMethod;
import org.springframework.security.web.servlet.util.matcher.PathPatternRequestMatcher;
import org.springframework.security.web.util.matcher.RequestMatcher;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.List;

@Component
public class JwtFilter extends OncePerRequestFilter {

    private JwtService jwtService;
    private AuthenticateService authService;

    public JwtFilter(JwtService jwtService, AuthenticateService authService) {
        this.jwtService = jwtService;
        this.authService = authService;
    }

    private final List<RequestMatcher> PUBLICS = List.of(
            PathPatternRequestMatcher.withDefaults().matcher(HttpMethod.POST, "/" + Api.AUTH + Api.LOGIN)
    );

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) {
        return PUBLICS.stream().anyMatch(path -> path.matches(request));
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String token = request.getHeader("Authorization");
        Long id = jwtService.validate(token);
        authService.authenticate(id);
        filterChain.doFilter(request, response);
    }
}
