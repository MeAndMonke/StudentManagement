package com.example.demo.service;

import com.example.demo.model.Users;
import com.example.demo.repository.UsersRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsersService {

    private final UsersRepository repository;
    private final PasswordEncoder passwordEncoder;

    public UsersService(UsersRepository repository,
                        PasswordEncoder passwordEncoder) {
        this.repository = repository;
        this.passwordEncoder = passwordEncoder;
    }

    public List<Users> getAllUsers() {
        return repository.findAll();
    }

    public Users getUserById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public Users createUser(Users user) {

        if (repository.findByEmail(user.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists.");
        }

        // Encrypt password
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        return repository.save(user);
    }

    public Users login(Users user) {

        Users foundUser = repository.findByEmail(user.getEmail())
                .orElseThrow(() -> 
                    new RuntimeException("Invalid email or password")
                );

        if (!passwordEncoder.matches(
                user.getPassword(),
                foundUser.getPassword()
        )) {
            throw new RuntimeException("Invalid email or password");
        }

        return foundUser;
    }

    public void deleteUser(Long id) {
        repository.deleteById(id);
    }
}