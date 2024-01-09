package org.launchcode.bookmaster.book;

import org.launchcode.bookmaster.loan.Loan;
import org.launchcode.bookmaster.review.Review;
import org.launchcode.bookmaster.user.User;
import org.launchcode.bookmaster.user.UserLoanDTO;
import org.launchcode.bookmaster.user.UserReviewDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/book")
@CrossOrigin
public class BookController {

    @Autowired
    private BookRepository bookRepository;

    @PostMapping("/save")
    public Book saveBook(@RequestBody Book newBook){
        return bookRepository.save(newBook);
    }

    @GetMapping("/all")
    public Iterable<Book> getBooks(){
        return bookRepository.findAll();
    }

    @GetMapping("/{bookId}")
    public Book getBook(@PathVariable Integer bookId){
        return bookRepository.findById(bookId).orElseThrow();
    }

    @DeleteMapping("/{bookId}")
    public void deleteBook(@PathVariable Integer bookId) {
        bookRepository.deleteById(bookId);
    }

    @PutMapping("/{bookId}")
    public Book updateBook(@PathVariable Integer bookId, @RequestBody Book updatedBook) {
        Book book = bookRepository.findById(bookId).orElseThrow();
        book.setTitle(updatedBook.getTitle());
        book.setAuthor(updatedBook.getAuthor());
        book.setIsbn(updatedBook.getIsbn());
        book.setGender(updatedBook.getGenre());
        book.setTotal_quantity(updatedBook.getTotal_quantity());
        book.setAvailable_quantity(updatedBook.getAvailable_quantity());

        return bookRepository.save(book);

    }

    @GetMapping("/reviews/{bookId}")
    public Iterable<UserReviewDTO> getBookReviews(@PathVariable Integer bookId) {
        ArrayList<UserReviewDTO> usersReviews = new ArrayList<>();

        Book book = bookRepository.findById(bookId).orElseThrow();
        Iterable<Review> bookReviews = book.getReviews();
        for (Review review : bookReviews) {
            User user = review.getUser();
            UserReviewDTO userReviewDTO= new UserReviewDTO(review.getId(), user, review.getReview(), review.getRating());
            usersReviews.add(userReviewDTO);
        }
        return usersReviews;
    }

    @GetMapping("/loan/{bookId}")
    public Iterable<UserLoanDTO> getBooksLoan(@PathVariable Integer bookId) {
        ArrayList<UserLoanDTO> usersLoans = new ArrayList<>();

        Book book = bookRepository.findById(bookId).orElseThrow();
        Iterable<Loan> bookLoans = book.getLoans();
        for (Loan loan : bookLoans) {
            User user = loan.getUser();
            UserLoanDTO userLoanDTO= new UserLoanDTO(loan.getLoanDateOut(), loan.getLoanDateIn(), user);
            usersLoans.add(userLoanDTO);
        }
        return usersLoans;
    }

    @GetMapping("/search_results")
    public Iterable<Book> listBooks(@RequestParam String column, @RequestParam String searchTerm) {
        Iterable<Book> books;

        books = BookData.findByColumn(column, searchTerm, bookRepository.findAll());

        return books;
    }
    //http://localhost:8080/book/search_results?column=all&searchTerm=
}
