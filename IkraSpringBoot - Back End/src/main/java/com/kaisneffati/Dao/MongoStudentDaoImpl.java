package com.kaisneffati.Dao;

import com.kaisneffati.Entity.Student;
import com.kaisneffati.Entity.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Collection;

/**
 * Created by Kais NEFFATI on 1/27/2017.
 */
@Repository
@Qualifier("mongodb")
public class MongoStudentDaoImpl implements StudentDao  {

    @Autowired
    StudentRepository studentRepository;

    @Override
    public Collection<Student> getAllStudents() {
        studentRepository.save(new Student(1,"said","Computer Science","user","password"));
        studentRepository.save(new Student(2,"Alex","Finance","user","password"));
        return studentRepository.findAll();
    }

    @Override
    public Student getStudentById(int id) {
        return null;
    }

    @Override
    public void removeStudentById(int id) {

    }

    @Override
    public void updateStudent(Student student) {

    }

    @Override
    public void insertStudent(Student student) {

    }
}
