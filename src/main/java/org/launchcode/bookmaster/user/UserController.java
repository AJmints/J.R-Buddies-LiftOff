package org.launchcode.bookmaster.user;

//import lombok.RequiredArgsConstructor;
//import org.launchcode.bookmaster.user.auth.AuthenticationRequest;
//import org.launchcode.bookmaster.user.auth.AuthenticationResponse;
//import org.launchcode.bookmaster.user.auth.AuthenticationService;
//import org.launchcode.bookmaster.user.auth.RegisterRequest;
import org.launchcode.bookmaster.book.Book;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


//@RequiredArgsConstructor
@RestController
@RequestMapping("/api/user")
@CrossOrigin
public class UserController {

    @Autowired
    private UserRepository userRepository;
//    private final AuthenticationService service;


//    @PostMapping("/register")
//    public ResponseEntity<AuthenticationResponse> register(
//            @RequestBody RegisterRequest request
//    ) {
//        return  ResponseEntity.ok(service.register(request));
//    }


//    @PostMapping("/login")
//    public ResponseEntity<AuthenticationResponse> authenticate(
//            @RequestBody AuthenticationRequest request
//    ) {
//        return  ResponseEntity.ok(service.authenticate(request));
//    }

    @PostMapping("/register")
    public User saveUser(@RequestBody User user) {
        return userRepository.save(user);
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
            user.setFirstName(updatedUser.getFirstName());
            user.setLastName(updatedUser.getLastName());
            user.setEmail(updatedUser.getEmail());
            user.setPhone(updatedUser.getPhone());
            user.setAddress(updatedUser.getAddress());


            return userRepository.save(user);


    }

    @GetMapping("/{userId}/allRecommendations")
    public Iterable<Book> getAllRecommendations(@PathVariable Integer userId){
        User user = userRepository.findById(userId).orElseThrow();
        return user.getRecommendation();
    }

    @PutMapping("/{userId}/addRecommendation")
    public void addRecommendation(@PathVariable Integer userId, @RequestBody Book book){
        User user = userRepository.findById(userId).orElseThrow();
        user.addRecommendation(book);
    }

    @DeleteMapping("/{userId}/deleteRecommendation")
    public void deleteRecommendation(@PathVariable Integer userId, @RequestBody Book book) {
        User user = userRepository.findById(userId).orElseThrow();
        user.removeRecommendation(book);
    }
}