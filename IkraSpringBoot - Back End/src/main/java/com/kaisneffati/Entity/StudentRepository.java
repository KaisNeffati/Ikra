package com.kaisneffati.Entity;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

/**
 * Created by Kais NEFFATI on 1/29/2017.
 */
public interface StudentRepository extends MongoRepository<Student, String> {
}
