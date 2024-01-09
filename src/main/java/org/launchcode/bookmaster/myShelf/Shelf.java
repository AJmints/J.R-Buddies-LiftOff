package org.launchcode.bookmaster.myShelf;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import org.launchcode.bookmaster.abstractEntity.AbstractEntity;
import org.launchcode.bookmaster.book.Book;
import org.launchcode.bookmaster.user.User;

@Entity
public class Shelf extends AbstractEntity {

    @ManyToOne
    private Book book;

    @ManyToOne
    private User user;

    public Shelf(Book book, User user) {
        this.book = book;
        this.user = user;
    }

    public Shelf() {
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
}
