package com.example.demo.controller;

import com.example.demo.model.Users;
import com.example.demo.service.UsersService;

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

    // POST endpoint to create a new user
    @PostMapping
    public Users createUser(@RequestBody Users user) {
        return userService.createUser(user);
    }

    // DELETE endpoint to delete a user by ID
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }
}
