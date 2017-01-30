package com.kaisneffati.Service;

import com.kaisneffati.Dao.StudentDao;
import com.kaisneffati.Entity.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.Collection;

/**
 * Created by Kais NEFFATI on 1/27/2017.
 */
@Service
public class StudentService {

    @Autowired
    @Qualifier("mongodb")
    private StudentDao studentDao;
    public Collection<Student> getAllStudents(){
        return studentDao.getAllStudents();
    }
    public Student getStudentById(int id){
        return studentDao.getStudentById(id);
    }
    public void removeStudentById(int id){
        studentDao.removeStudentById(id);
    }
    public void updateStudent(Student student){
        studentDao.updateStudent(student);
    }
    public void insertStudent(Student student){
        studentDao.insertStudent(student);
    }
}
