package org.launchcode.bookmaster.holds;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import org.launchcode.bookmaster.abstractEntity.AbstractEntity;
import org.launchcode.bookmaster.book.Book;
import org.launchcode.bookmaster.user.User;

import java.util.Date;

@Entity
public class Hold extends AbstractEntity {

    @ManyToOne
    private Book book;

    @ManyToOne
    private User user;

    private Date holdDate;

    public Hold(Book book, User user, Date holdDate) {
        this.book = book;
        this.user = user;
        this.holdDate = holdDate;
    }

    public Hold() {

    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Date getHoldDate() {
        return holdDate;
    }

}



