package org.launchcode.bookmaster.review;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import org.launchcode.bookmaster.user.User;
import org.launchcode.bookmaster.abstractEntity.AbstractEntity;
import org.launchcode.bookmaster.book.Book;


@Entity
public class Review extends AbstractEntity {

    @ManyToOne
    private Book book;
    @ManyToOne
    private User user;
    private String review;
    private Integer rating;


    public Review(Book book, User user, String review, Integer rating) {
        this.book = book;
        this.user = user;
        this.review = review;
        this.rating = rating;
    }
    public Review(){}

    @JsonBackReference(value="book-review")
    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    @JsonBackReference(value="user-review")
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }
}
