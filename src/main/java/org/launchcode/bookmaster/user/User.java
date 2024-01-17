package org.launchcode.bookmaster.user;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;
import lombok.*;
import org.launchcode.bookmaster.abstractEntity.AbstractEntity;
import org.launchcode.bookmaster.loan.Loan;
import org.launchcode.bookmaster.review.Review;
import org.launchcode.bookmaster.role.Role;

import java.util.*;

@Data
@EqualsAndHashCode(callSuper=true)
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class User extends AbstractEntity {

    private String firstName;
    private String lastName;
    private String phone;
    private String address;
    private String email;
    private String password;

    @Builder.Default
    @OneToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "users_role", joinColumns = @JoinColumn(name = "cust_id", referencedColumnName = "id"),
    inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName = "id"))
    Set<Role> role = new HashSet<Role>();

    @OneToMany(mappedBy = "user")
    private final List<Review> reviews = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private final List<Loan> loans = new ArrayList<>();

    public Set<Role> getRole() {
        return role;
    }

    public void setRole(Set<Role> role) {
        this.role = role;
    }

//    public User(String firstName, String lastName, String phone, String address, String email, String password) {
//        this.firstName = firstName;
//        this.lastName = lastName;
//        this.phone = phone;
//        this.address = address;
//        this.email = email;
//        this.password = password;
////        this.role = role;
//    }
//
//    public User() {
//    }
//
//    public String getFirstName() {
//        return firstName;
//    }
//
//    public void setFirstName(String firstName) {
//        this.firstName = firstName;
//    }
//
//    public String getLastName() {
//        return lastName;
//    }
//
//    public void setLastName(String lastName) {
//        this.lastName = lastName;
//    }
//
//    public String getPhone() {
//        return phone;
//    }
//
//    public void setPhone(String phone) {
//        this.phone = phone;
//    }
//
//    public String getAddress() {
//        return address;
//    }
//
//    public void setAddress(String address) {
//        this.address = address;
//    }
//
//    public String getEmail() {
//        return email;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
//    }
//
//    public String getPassword() {
//        return password;
//    }
//    public void setPassword(String password) {
//        this.password = password;
//    }

//    public Role getRole() {
//        return role;
//    }
//
//
//    public void setRole(Role role) {
//        this.role = role;
//    }

    @JsonManagedReference(value="user-loan")
    public List<Loan> getLoans() {
        return loans;
    }

    @JsonManagedReference(value="user-review")
    public List<Review> getReviews() {
        return reviews;
    }

    @Override
    public String toString() {
        return firstName + " " + lastName;
    }

    public String getUserName() {
        return String.valueOf(id) ;
    }



}