package com.rest.webservice.restfulwebservice.todo;


import com.sun.jndi.toolkit.url.Uri;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
@CrossOrigin
@RestController
public class TodoResource {
    @Autowired
    private TodoHardcodedService hardcodedService;

    @GetMapping("/users/{userName}/todos")
    public List<Todo> getAllTodo(@PathVariable String userName){
        return hardcodedService.findAll();
    }

    @GetMapping("/users/{userName}/todos/{id}")
    public Todo getTodo(@PathVariable String userName, @PathVariable Integer id){
        return hardcodedService.findById(id);
    }

    @DeleteMapping("/users/{userName}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String userName,@PathVariable Integer id){
        Todo todo = hardcodedService.deleteById(id);
        if(todo != null){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/users/{userName}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable String userName,@PathVariable Integer id, @RequestBody Todo todo){
        Todo todoUpdated = hardcodedService.save(todo);
        return new ResponseEntity<>(todoUpdated, HttpStatus.OK);
    }
    @PostMapping("/users/{userName}/todos")
    public ResponseEntity<Void> createTodo(@PathVariable String userName, @RequestBody Todo todo){
        todo.setId(-1);
        Todo todoCreated = hardcodedService.save(todo);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{id}").
                buildAndExpand(todoCreated.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }
}
