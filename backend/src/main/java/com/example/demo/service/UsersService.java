package com.example.demo.service;

import com.example.demo.model.Users;
import com.example.demo.repository.UsersRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsersService {
    private final UsersRepository repository;

    public UsersService(UsersRepository repository) {
        this.repository = repository;
    }

    public List<Users> getAllUsers() {
        return repository.findAll();
    }

    public Users addUser(Users user) {
        return repository.save(user);
    }

    public Users getUserById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public Users createUser(Users user) {
        return repository.save(user);
    }

    public void deleteUser(Long id) {
        repository.deleteById(id);
    }
}
