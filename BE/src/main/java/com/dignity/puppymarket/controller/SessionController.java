package com.dignity.puppymarket.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SessionController {
    private final AuthenticationService authenticationService;

    public SessionController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }
    
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public SessionResultData login(@RequestBody AuthenticationCreateData authenticationCreateData) {
        return authenticationService.createToken(authenticationCreateData);
    }
}
