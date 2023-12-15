package org.launchcode.bookmaster.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping
    public User saveUser(@RequestBody User newUser){
        return userRepository.save(newUser);
    }

    @GetMapping("/all")
    public Iterable<User> getAllUsers(){
        return userRepository.findAll();
    }

    @GetMapping("/{userId}")
    public User getUser(@PathVariable Integer userId){
        return userRepository.findById(userId).orElseThrow();
    }

    @DeleteMapping("/{userId}")
    public void deleteUser(@PathVariable Integer userId) {
        userRepository.deleteById(userId);

    }

    @PutMapping("/{userId}")
    public User updateUser(@PathVariable Integer userId, @RequestBody User updatedUser) {
        User user = userRepository.findById(userId).orElseThrow();
            user.setFirstname(updatedUser.getFirstname());
            user.setLastname(updatedUser.getLastname());
            user.setEmail(updatedUser.getEmail());
            user.setPhone(updatedUser.getPhone());
            user.setAddress(updatedUser.getAddress());

            return userRepository.save(user);


    }

}