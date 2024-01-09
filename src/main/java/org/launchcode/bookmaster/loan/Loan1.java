package org.launchcode.bookmaster.loan;


import com.fasterxml.jackson.annotation.JsonBackReference;
import org.launchcode.bookmaster.user.User;
import org.launchcode.bookmaster.abstractEntity.AbstractEntity;
import org.launchcode.bookmaster.book.Book;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;

import java.sql.Time;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.sql.Timestamp;

@Entity
public class Loan1 extends AbstractEntity {

    @ManyToOne
    private Book book;
    @ManyToOne
    private User user;
    private Calendar loanDateOut = GregorianCalendar.getInstance();

    private Date calculateDueDate() {
        Calendar cal = GregorianCalendar.getInstance();
        Date date = new Date();
        cal.setTime(date);
        cal.add(Calendar.DATE, 30);
        date = cal.getTime();
        return date;
    }

    private Date loanDueDate = calculateDueDate();




    public Loan1( Book book, User user, Calendar loanDateOut, Calendar loanDueDate) {
        this.book = book;
        this.user = user;
        this.loanDateOut = loanDateOut;
        this.loanDueDate = loanDueDate.getTime();
    }

    public Loan1() {
    }

    @JsonBackReference(value="book-loan")
    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    @JsonBackReference(value="user-loan")
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Date getLoanDateOut() {
        return loanDateOut.getTime();
    }

    public Date getLoanDueDate() {
        return loanDueDate;
    }
}
