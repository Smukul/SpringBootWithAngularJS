package com.rest.webservice.restfulwebservice.controller;


import com.rest.webservice.restfulwebservice.model.HelloUser;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorld {

    @GetMapping("/hello")
    public String hello(){
        return "Hello World!";
    }

    @GetMapping("/hello-bean")
    public HelloUser helloBean(){
        //throw new RuntimeException("Some error occurred. Contact support xxx-xxx-xxx");
        return new HelloUser("Pratap");
    }

    @GetMapping("/hello-param/{name}")
    public HelloUser helloParam(@PathVariable String name){
        return new HelloUser(name);
    }
}
