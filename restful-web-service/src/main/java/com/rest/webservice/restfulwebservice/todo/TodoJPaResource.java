package com.rest.webservice.restfulwebservice.todo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
public class TodoJPaResource {

    @Autowired
    private TodoJpaRepository jpaRepository;

    @GetMapping("/jpa/users/{userName}/todos")
    public List<TodoJPA> getAllJpaTodo(@PathVariable String userName){
        return jpaRepository.findAll();
    }

    @GetMapping("/jpa/users/{userName}/todos/{id}")
    public Optional<TodoJPA> getJpaTodo(@PathVariable String userName, @PathVariable Long id){
        return jpaRepository.findById(id);
    }
}
