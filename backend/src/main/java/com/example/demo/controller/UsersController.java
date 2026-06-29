package com.example.demo.controller;

import com.example.demo.model.Users;
import com.example.demo.service.UsersService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173") // allow requests from frontend running on port 5173
public class UsersController {
    private final UsersService userService;

    public UsersController(UsersService userService) {
        this.userService = userService;
    }

    // GET endpoint to retrieve all users
    @GetMapping
    public List<Users> getAllUsers() {
        return userService.getAllUsers();
    }

    // GET endpoint to retrieve a user by ID
    @GetMapping("/{id}")
    public Users getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    // Post endpoint to create a new user
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody Users user) {

        try {
            return ResponseEntity.ok(userService.createUser(user));
        } catch (RuntimeException ex) {
            return ResponseEntity.badRequest().body(ex.getMessage());
        }

    }

    // POST endpoint for user login
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Users user) {

        try {
            Users loggedUser = userService.login(user);

            return ResponseEntity.ok(loggedUser);

        } catch (RuntimeException ex) {

            return ResponseEntity.badRequest().body(ex.getMessage());

        }
    }

    // DELETE endpoint to delete a user by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.ok().build();
    }
}
