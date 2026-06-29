package com.example.demo.repository;

import com.example.demo.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;

// this extends provides CRUD operations for the user entity
public interface UsersRepository extends JpaRepository<Users, Long> {
// Spring Boot automatically generates methods like
// findAll()
// findById(id)
// save(user)
// delete(user)
// deleteById(id)
// count()
}
