package org.launchcode.bookmaster.loan;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/loan")
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
        loan.setLoanDateIn(updatedLoan.getLoanDateIn());

        return loanRepository.save(loan);


    }
}