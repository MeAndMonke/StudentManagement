package com.example.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "users") // specify the table name in the database
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto-generate the ID value
    private Long id;
    private String email;
    private String password;
    private String role;

    public Users() {}

    public Users(String email, String password, String role) {
        this.email = email;
        this.password = password;
        this.role = role;
    }

    public Long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
