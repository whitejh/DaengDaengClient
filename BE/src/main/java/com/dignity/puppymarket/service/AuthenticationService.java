package com.dignity.puppymarket.service;

import com.dignity.puppymarket.dto.AuthenticationCreateDto;
import com.dignity.puppymarket.dto.SessionResponseDto;
import com.dignity.puppymarket.dto.User.UserLoginResponseDto;
import com.dignity.puppymarket.error.AuthenticationBadRequestException;
import com.dignity.puppymarket.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {
    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;
    private final PasswordEncoder passwordEncoder;

    public AuthenticationService(UserRepository userRepository,
                                 JwtUtil jwtUtil,
                                 PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.jwtUtil = jwtUtil;
        this.passwordEncoder = passwordEncoder;
    }

    public SessionResponseDto createToken(AuthenticationCreateDto authenticationCreateDto) {
        UserLoginResponseDto userLoginResponseDto = authenticateUser(
                authenticationCreateDto.getEmail(),
                authenticationCreateDto.getPassword()
        );

        String accessToken = jwtUtil.encode(userLoginResponseDto.getId());

        return SessionResponseDto.of(accessToken);
    }

    public UserLoginResponseDto authenticateUser(String email, String password) {
        return userRepository.findByEmail(email)
                .filter(u -> u.authenticate(password, passwordEncoder))
                .map(UserLoginResponseDto::of)
                .orElseThrow(() -> new AuthenticationBadRequestException(email));
    }
}
