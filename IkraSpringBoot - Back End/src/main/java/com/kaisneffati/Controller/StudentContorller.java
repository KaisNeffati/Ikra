package com.kaisneffati.Controller;

import com.kaisneffati.Entity.Student;
import com.kaisneffati.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

/**
 * Created by Kais NEFFATI on 1/27/2017.
 */

@RestController
@RequestMapping("/students")
public class StudentContorller {

    @Autowired
    private StudentService studentService;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method=RequestMethod.GET, produces="application/json")
    public Collection<Student> getAllStudents(){
        return studentService.getAllStudents();
    }


    @RequestMapping(value = "/{id}",method = RequestMethod.GET)
    public Student getStudentById(@PathVariable("id") int id){
        return studentService.getStudentById(id);
    }

    @RequestMapping(value = "/{id}",method = RequestMethod.DELETE)
    public void deleteStudentById(@PathVariable("id") int id){
        studentService.removeStudentById(id);
    }

    @RequestMapping(method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void updateStudent(@RequestBody Student student){
        studentService.updateStudent(student);
    }

    @RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void insertStudent(@RequestBody Student student){
        studentService.insertStudent(student);
    }
}
