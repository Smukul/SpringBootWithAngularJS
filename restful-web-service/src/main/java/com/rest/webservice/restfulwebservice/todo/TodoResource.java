package com.rest.webservice.restfulwebservice.todo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
public class TodoResource {
    @Autowired
    private TodoHardcodedService hardcodedService;

    @GetMapping("/users/{userName}/todos")
    public List<Todo> getAllTodo(String user){
        return hardcodedService.findAll();
    }

    @DeleteMapping("/users/{userName}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String userName,@PathVariable Integer id){
        Todo todo = hardcodedService.deleteById(id);
        if(todo != null){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
