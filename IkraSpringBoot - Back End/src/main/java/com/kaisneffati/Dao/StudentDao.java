package com.kaisneffati.Dao;

import com.kaisneffati.Entity.Student;

import java.util.Collection;

/**
 * Created by Kais NEFFATI on 1/27/2017.
 */
public interface StudentDao  {
    Collection<Student> getAllStudents();

    Student getStudentById(int id);

    void removeStudentById(int id);

    void updateStudent(Student student);

    void insertStudent(Student student);
}
