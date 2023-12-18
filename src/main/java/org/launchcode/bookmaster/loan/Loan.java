package org.launchcode.bookmaster.loan;


import com.fasterxml.jackson.annotation.JsonBackReference;
import org.launchcode.bookmaster.user.User;
import org.launchcode.bookmaster.abstractEntity.AbstractEntity;
import org.launchcode.bookmaster.book.Book;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;

import java.util.Date;

@Entity
public class Loan extends AbstractEntity {

    @ManyToOne
    private Book book;

    @ManyToOne
    private User user;

    private Date loanDateOut;
    private Date LoanDateIn;


    public Loan( Book book, User user, Date loanDateOut, Date loanDateIn) {
        this.book = book;
        this.user = user;
        this.loanDateOut = loanDateOut;
        this.LoanDateIn = loanDateIn;
    }

    public Loan() {
    }

//    @JsonBackReference
    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

//    @JsonBackReference
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Date getLoanDateOut() {
        return loanDateOut;
    }

    public void setLoanDateOut(Date loanDateOut) {
        this.loanDateOut = loanDateOut;
    }

    public Date getLoanDateIn() {
        return LoanDateIn;
    }

    public void setLoanDateIn(Date loanDateIn) {
        LoanDateIn = loanDateIn;
    }




}
