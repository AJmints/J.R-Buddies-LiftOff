package org.launchcode.bookmaster.user;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;
import org.launchcode.bookmaster.abstractEntity.AbstractEntity;
import org.launchcode.bookmaster.loan.Loan;
import org.launchcode.bookmaster.review.Review;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Data
@EqualsAndHashCode(callSuper=true)
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class User extends AbstractEntity implements UserDetails {

    private String firstName;
    private String lastName;
    private String phone;
    private String address;
    private String email;
    private String password;
    @Enumerated(EnumType.STRING)
    private Role role;


    @OneToMany(mappedBy = "user")
    private final List<Review> reviews = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private final List<Loan> loans = new ArrayList<>();

//    public User(String firstName, String lastName, String phone, String address, String email, String password, Role role) {
//        this.firstName = firstName;
//        this.lastName = lastName;
//        this.phone = phone;
//        this.address = address;
//        this.email = email;
//        this.password = password;
//        this.role = role;
//    }

//    public User() {
//    }

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
//
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
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public String toString() {
        return firstName + " " + lastName;
    }
}