package org.launchcode.bookmaster.user;

import lombok.RequiredArgsConstructor;
//import org.launchcode.bookmaster.user.auth.AuthenticationRequest;
//import org.launchcode.bookmaster.user.auth.AuthenticationResponse;
//import org.launchcode.bookmaster.user.auth.AuthenticationService;
//import org.launchcode.bookmaster.user.auth.RegisterRequest;
import org.launchcode.bookmaster.book.BookLoanDTO;
import org.launchcode.bookmaster.book.BookRepository;
import org.launchcode.bookmaster.loan.Loan;
import org.launchcode.bookmaster.loan.LoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.launchcode.bookmaster.book.Book;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;


//@RequiredArgsConstructor
@RestController
@RequestMapping("/api/user")
@CrossOrigin
public class UserController {

    @Autowired
    private UserRepository userRepository;

//    private final AuthenticationService service;
//
//
//    @PostMapping("/register")
//    public ResponseEntity<AuthenticationResponse> register(
//            @RequestBody RegisterRequest request
//    ) {
//        return  ResponseEntity.ok(service.register(request));
//    }
//
//
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

    @GetMapping("/loan/{userId}")
    public Iterable<BookLoanDTO> getUsersLoan(@PathVariable Integer userId) {
        ArrayList<BookLoanDTO> booksLoans = new ArrayList<>();

        User user = userRepository.findById(userId).orElseThrow();
        Iterable<Loan> userLoans = user.getLoans();
        for (Loan loan : userLoans) {
            Book book = loan.getBook();
            BookLoanDTO bookLoanDTO= new BookLoanDTO(loan.getLoanDateOut(), loan.getLoanDateIn(), book);
            booksLoans.add(bookLoanDTO);
        }
        return booksLoans;
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
            user.setRole(updatedUser.getRole());


            return userRepository.save(user);


    }

}