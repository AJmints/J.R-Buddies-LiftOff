package org.launchcode.bookmaster.loan;

import org.launchcode.bookmaster.book.Book;
import org.launchcode.bookmaster.user.User;

import java.util.Date;

public class UserBookLoanDTO {
    private Loan loan;
    private User user;
    private Book book;

    public UserBookLoanDTO(Loan loan, User user, Book book) {
        this.loan =loan;
        this.user = user;
        this.book = book;
    }


    public Loan getLoan() {
        return loan;
    }

    public void setLoan(Loan loan) {
        this.loan = loan;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }
}
