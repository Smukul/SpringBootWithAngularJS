package com.rest.webservice.restfulwebservice.controller;

import com.rest.webservice.restfulwebservice.model.BasicAuthBean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BasicAuthenticationController {

    @GetMapping("/basic-auth")
    public BasicAuthBean getBasicAuth(){
        return new BasicAuthBean("You are connected");
    }
}
