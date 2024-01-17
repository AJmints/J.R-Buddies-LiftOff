package org.launchcode.bookmaster.user.auth;

import org.launchcode.bookmaster.user.User;
import lombok.RequiredArgsConstructor;
import org.launchcode.bookmaster.user.UserRepository;
import org.launchcode.bookmaster.user.auth.service.DefaultUserService;
import org.launchcode.bookmaster.user.config.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;


@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;



        public AuthenticationResponse authenticate (AuthenticationRequest request){
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getPassword()
                    )
            );
            SecurityContextHolder.getContext().setAuthentication(authentication);
            var jwtToken = jwtService.generateToken(authentication);
            return AuthenticationResponse.builder()
                    .token(jwtToken)
                    .build();
        }

    }
