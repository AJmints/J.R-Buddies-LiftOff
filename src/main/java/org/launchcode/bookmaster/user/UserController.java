package org.launchcode.bookmaster.user;

import lombok.RequiredArgsConstructor;
import org.launchcode.bookmaster.role.Role;
import org.launchcode.bookmaster.role.RoleRepository;
import org.launchcode.bookmaster.user.auth.AuthenticationRequest;
import org.launchcode.bookmaster.user.auth.AuthenticationResponse;
import org.launchcode.bookmaster.user.auth.AuthenticationService;
import org.launchcode.bookmaster.user.auth.RegisterRequest;
import org.launchcode.bookmaster.book.BookLoanDTO;
import org.launchcode.bookmaster.book.BookRepository;
import org.launchcode.bookmaster.book.BookReviewsDTO;
import org.launchcode.bookmaster.loan.Loan;
import org.launchcode.bookmaster.loan.LoanRepository;
import org.launchcode.bookmaster.review.Review;
import org.launchcode.bookmaster.user.auth.service.DefaultUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.launchcode.bookmaster.book.Book;
import org.springframework.web.bind.annotation.*;

import java.util.*;


@RequiredArgsConstructor
@RestController
@RequestMapping("/api/user")
@CrossOrigin
public class UserController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    DefaultUserService defaultUserService;
    @Autowired
    RoleRepository roleRepository;

    private final AuthenticationService service;


    @PostMapping("/register")
    public ResponseEntity<Object> register(
            @RequestBody RegisterRequest request
    ) {
        User users = defaultUserService.save(request);

        if (users.equals(null))
            return generateResponse("Not able to save user ", HttpStatus.BAD_REQUEST, request);
        else
            return generateResponse("User saved successfully : " + users.getId(), HttpStatus.OK, users);
    };


    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest request
    ) {
        return  ResponseEntity.ok(service.authenticate(request));
    }

//    @PostMapping("/register")
//    public User saveUser(@RequestBody User user) {
//        return userRepository.save(user);
//    }

    @GetMapping("/all")
    public Iterable<User> getAllUsers(){
        return userRepository.findAll();
    }

    @GetMapping("/{userId}")
    public User getUser(@PathVariable Integer userId){
        return userRepository.findById(userId).orElseThrow();
    }

    @GetMapping("/reviews/{userId}")
    public Iterable<BookReviewsDTO> getUserReviews(@PathVariable Integer userId) {
        ArrayList<BookReviewsDTO> booksReviews = new ArrayList<>();

        User user = userRepository.findById(userId).orElseThrow();
        Iterable<Review> userReviews = user.getReviews();
        for (Review review : userReviews) {
            Book book = review.getBook();
            BookReviewsDTO bookReviewsDTO= new BookReviewsDTO(review.getId(), book, review.getReview(), review.getRating());
            booksReviews.add(bookReviewsDTO);
        }
        return booksReviews;
    }

    @GetMapping("/loans/{userId}")
    public Iterable<BookLoanDTO> getUsersLoan(@PathVariable Integer userId) {
        ArrayList<BookLoanDTO> booksLoans = new ArrayList<>();

        User user = userRepository.findById(userId).orElseThrow();
        Iterable<Loan> userLoans = user.getLoans();
        for (Loan loan : userLoans) {
            Book book = loan.getBook();
            BookLoanDTO bookLoanDTO= new BookLoanDTO(loan.getId() ,loan.getLoanDateOut(), loan.getLoanDateIn(), book);
            booksLoans.add(bookLoanDTO);
        }
        return booksLoans;
    }

    @DeleteMapping("/{userId}")
    public void deleteUser(@PathVariable Integer userId) {
        userRepository.deleteById(userId);

    }

    @PutMapping("/{userId}")
    public User updateUser(@PathVariable Integer userId, @RequestBody RegisterRequest request) {
        User user = userRepository.findById(userId).orElseThrow();
        Role role = new Role();
        role = roleRepository.findByRole(request.getRole());
        Set<Role> roles = new HashSet<Role>() ;
        roles.add(role);
        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setPhone(request.getPhone());
        user.setEmail(request.getEmail());
        user.setAddress(request.getAddress());
        user.setRole(roles);

        return userRepository.save(user);

    }

    public ResponseEntity<Object> generateResponse(String message, HttpStatus st, Object responseobj) {

        Map<String, Object> map = new HashMap<String, Object>();
        map.put("meaasge", message);
        map.put("Status", st.value());
        map.put("data", responseobj);

        return new ResponseEntity<Object>(map, st);

    }

}