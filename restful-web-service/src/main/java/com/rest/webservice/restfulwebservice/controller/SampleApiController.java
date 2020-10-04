package com.rest.webservice.restfulwebservice.controller;

import com.rest.webservice.restfulwebservice.api.SampleAPI;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SampleApiController implements SampleAPI {
    @Override
    public String getData() {
        return "This is from Sample API";
    }

    @GetMapping("/sample1")
    public String getData1() {
        return "This is from Sample API to check data from another method";
    }
}
