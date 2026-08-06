package com.agro.feature.auth.filters;

import com.agro.core.api.Api;
import com.agro.feature.auth.services.jwt.JwtService;
import com.agro.feature.auth.services.userDetails.UserDetailsAdapter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.servlet.util.matcher.PathPatternRequestMatcher;
import org.springframework.security.web.util.matcher.RequestMatcher;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.List;

@Component
public class JwtFilter extends OncePerRequestFilter {

    private JwtService jwtService;
    private UserDetailsAdapter userDetailsService;

    public JwtFilter(JwtService jwtService, UserDetailsAdapter userDetailsService) {
        this.jwtService = jwtService;
        this.userDetailsService = userDetailsService;
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
        String tokenWithoutBearer = request.getHeader("Authorization").substring(7);
        Long id = jwtService.validate(tokenWithoutBearer);
        UserDetails user = userDetailsService.loadUserById(id);
        Authentication auth = new UsernamePasswordAuthenticationToken(user.getUsername(), null, user.getAuthorities());
        SecurityContextHolder.getContext().setAuthentication(auth);
        filterChain.doFilter(request, response);
    }
}
