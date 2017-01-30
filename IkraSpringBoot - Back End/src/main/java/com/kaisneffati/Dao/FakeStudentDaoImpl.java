package com.kaisneffati.Dao;

import com.kaisneffati.Entity.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by Kais NEFFATI on 1/27/2017.
 */
@Repository
@Qualifier("fakeData")
public class FakeStudentDaoImpl implements StudentDao {
    @Autowired
    public static Map<Integer,Student> students;
    static {
        students=new HashMap<Integer,Student>(){
            {
                        put(1,new Student(1,"said","Computer Science","user","password"));
                        put(2,new Student(2,"Alex","Finance","user","password"));
                        put(3,new Student(3,"Anna","Maths","user","password"));
            }
        };
    }
    @Override
    public Collection<Student> getAllStudents(){
        return this.students.values();
    }
    @Override
    public Student getStudentById(int id){
        return this.students.get(id);
    }
    @Override
    public void removeStudentById(int id){
        students.remove(id);
    }
    @Override
    public void updateStudent(Student student){
        Student s= students.get(student.getId());
        s.setCourse(student.getCourse());
        s.setName(student.getName());
        students.put(student.getId(),student);
    }
    @Override
    public void insertStudent(Student student){
        students.put(student.getId(),student);
    }
}
