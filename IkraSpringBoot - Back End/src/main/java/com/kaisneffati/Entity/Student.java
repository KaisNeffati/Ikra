package com.kaisneffati.Entity;

import org.springframework.data.annotation.Id;

/**
 * Created by Kais NEFFATI on 1/27/2017.
 */
public class Student {

    @Id
    private int id;

    private String name;
    private String course;
    private String username;
    private String password;

    public Student(int id, String name, String course,String username,String password ) {
        this.id = id;
        this.name = name;
        this.course = course;
        this.username = username;
        this.password = password;
    }
    public Student(){

    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }
}
