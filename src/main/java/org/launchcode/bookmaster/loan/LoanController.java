package org.launchcode.bookmaster.loan;


import org.launchcode.bookmaster.book.Book;
import org.launchcode.bookmaster.book.BookLoanDTO;
import org.launchcode.bookmaster.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/loan")
@CrossOrigin
public class LoanController {

    @Autowired
    private LoanRepository loanRepository;


    @PostMapping
    public Loan saveLoan(@RequestBody Loan newLoan){
        return loanRepository.save(newLoan);
    }

    @GetMapping("/all")
    public Iterable<Loan> getAllLoans(){
        return loanRepository.findAll();
    }

    @GetMapping("/{loanId}")
    public Loan getLoan(@PathVariable Integer loanId){
        return loanRepository.findById(loanId).orElseThrow();
    }

    @DeleteMapping("/{loanId}")
    public void deleteLoan(@PathVariable Integer loanId) {
        loanRepository.deleteById(loanId);
    }

    @PutMapping("/{loanId}")
    public Loan updateLoan(@PathVariable Integer loanId, @RequestBody Loan updatedLoan) {
        Loan loan = loanRepository.findById(loanId).orElseThrow();
        loan.setLoanDueDate(updatedLoan.getLoanDueDate());

        return loanRepository.save(loan);


    }

    @GetMapping("/all_details")
    public Iterable<UserBookLoanDTO> getUsersBooksLoan() {
        ArrayList<UserBookLoanDTO> userBookLoans = new ArrayList<>();

        Iterable<Loan> loans = loanRepository.findAll();
        for (Loan loan : loans) {
            Book book = loan.getBook();
            User user = loan.getUser();
            UserBookLoanDTO userBookLoanDTO= new UserBookLoanDTO(loan, user, book);
            userBookLoans.add(userBookLoanDTO);
        }
        return userBookLoans;
    }
}