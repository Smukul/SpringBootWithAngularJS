package com.rest.webservice.restfulwebservice.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardcodedService {
    public static List<Todo> todos = new ArrayList<>();
    private static Integer counter =0;
    static {
        todos.add(new Todo(++counter,"Pratap","Get sita back",new Date(),false));
        todos.add(new Todo(++counter,"Kangna","Finght with ShivSena",new Date(),false));
        todos.add(new Todo(++counter,"Ranveer","Save Deepika",new Date(),false));
        todos.add(new Todo(++counter,"Pratap","Become Full stack developer",new Date(),false));
        todos.add(new Todo(++counter,"Ranveer","Complete the Fuleri book",new Date(),false));
    }

    public List<Todo> findAll(){
        return todos;
    }

    public Todo deleteById(Integer id){
        Todo todo = findById(id);
        if(todo == null) return null;
        todos.remove(todo);
        return todo;
    }

    private Todo findById(Integer id) {
        for(Todo todo : todos){
            if(todo.getId().equals(id)){
                return todo;
            }
        }
        return null;
    }
}
