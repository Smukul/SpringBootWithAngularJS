package com.rest.webservice.restfulwebservice.model;

import org.springframework.stereotype.Component;


public class HelloUser {
    private String name;

    public HelloUser(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "HelloUser{" +
                "name='" + name + '\'' +
                '}';
    }
}
