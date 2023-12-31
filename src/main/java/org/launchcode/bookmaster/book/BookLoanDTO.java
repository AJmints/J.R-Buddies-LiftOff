package org.launchcode.bookmaster.book;

import java.util.Date;

public class BookLoanDTO {
    private Date loanDateOut;
    private Date loanDateIn;
    private Book book;

    public BookLoanDTO(Date loanDateOut, Date loanDateIn, Book book) {
        this.loanDateOut = loanDateOut;
        this.loanDateIn = loanDateIn;
        this.book = book;
    }

    public Date getLoanDateOut() {
        return loanDateOut;
    }

    public void setLoanDateOut(Date loanDateOut) {
        this.loanDateOut = loanDateOut;
    }

    public Date getLoanDateIn() {
        return loanDateIn;
    }

    public void setLoanDateIn(Date loanDateIn) {
        this.loanDateIn = loanDateIn;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }
}
