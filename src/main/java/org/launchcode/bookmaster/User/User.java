package org.launchcode.bookmaster.User;

import jakarta.persistence.*;
import org.launchcode.bookmaster.abstractEntity.AbstractEntity;
import org.launchcode.bookmaster.loan.Loan;
import org.launchcode.bookmaster.review.Review;

import java.util.ArrayList;
import java.util.List;

@Entity
public class User extends AbstractEntity {

    private String firstname;
    private String lastname;
    private String phone;
    private String address;
    private String email;
    private String password;
    @Enumerated(EnumType.STRING)
    private Role role;

    @OneToMany(mappedBy= "user")
    private final List<Review> reviews = new ArrayList<>();

    @OneToMany(mappedBy= "user")
    private final List<Loan> loans = new ArrayList<>();

    public User(String firstname, String lastname, String phone, String address, String email, String password, Role role) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.address = address;
        this.email = email;
        this.password = password;
        this.role = role;
    }
    public User() {
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
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

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public List<Loan> getLoans() {
        return loans;
    }

    public List<Review> getReviews() {
        return reviews;
    }

    @Override
    public String toString() {
        return firstname + " " + lastname;
    }
}