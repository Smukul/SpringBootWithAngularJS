package com.rest.webservice.restfulwebservice.api;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;

@RequestMapping("/api/todos/")
public interface SampleAPI {

    @GetMapping(value = "/sample")
    @ResponseStatus(code = HttpStatus.OK)
    public String getData();
}
