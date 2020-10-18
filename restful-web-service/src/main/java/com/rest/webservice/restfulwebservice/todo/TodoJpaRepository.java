package com.rest.webservice.restfulwebservice.todo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoJpaRepository extends JpaRepository<TodoJPA,Long> {

    List<TodoJPA> findByUserName(String username);
}
