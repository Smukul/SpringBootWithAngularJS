package com.rest.webservice.restfulwebservice.todo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;
import java.util.Objects;

@Entity
public class TodoJPA {
    @Id
    @GeneratedValue
    private Long id;
    private String userName;
    private String description;
    private Date targetDate;
    private Boolean done;

    public Boolean getDone() {
        return done;
    }

    public void setDone(Boolean done) {
        this.done = done;
    }

    public TodoJPA(Long id, String userName, String description, Date targetDate, Boolean isDone) {
        this.id = id;
        this.userName = userName;
        this.description = description;
        this.targetDate = targetDate;
        this.done = isDone;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getTargetDate() {
        return targetDate;
    }

    public void setTargetDate(Date targetDate) {
        this.targetDate = targetDate;
    }



    @Override
    public String toString() {
        return "Todo{" +
                "id=" + id +
                ", userName='" + userName + '\'' +
                ", description='" + description + '\'' +
                ", targetDate=" + targetDate +
                ", isDone=" + done +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof TodoJPA)) return false;
        TodoJPA todo = (TodoJPA) o;
        return Objects.equals(id, todo.id) &&
                Objects.equals(userName, todo.userName) &&
                Objects.equals(description, todo.description) &&
                Objects.equals(targetDate, todo.targetDate) &&
                Objects.equals(done, todo.done);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, userName, description, targetDate, done);
    }
}
