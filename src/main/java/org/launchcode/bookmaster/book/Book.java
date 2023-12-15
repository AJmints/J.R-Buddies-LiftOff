package org.launchcode.bookmaster.book;

import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import org.launchcode.bookmaster.abstractEntity.AbstractEntity;
import jakarta.persistence.Entity;
import org.launchcode.bookmaster.loan.Loan;
import org.launchcode.bookmaster.review.Review;

import java.util.ArrayList;
import java.util.List;


@Entity
public class Book extends AbstractEntity {

    private String title;
    private String author;
    private String isbn;
    private String gender;
    private Integer total_quantity;
    private Integer available_quantity;

    @OneToMany(mappedBy= "book")
    private final List<Loan> loans = new ArrayList<>();

    @OneToMany(mappedBy= "book")
    private final List<Review> reviews = new ArrayList<>();

    public Book(String title, String author, String isbn, String gender, Integer total_quantity, Integer available_quantity) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.gender = gender;
        this.total_quantity = total_quantity;
        this.available_quantity = available_quantity;
    }

    public Book() {}

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Integer getTotal_quantity() {
        return total_quantity;
    }

    public void setTotal_quantity(Integer total_quantity) {
        this.total_quantity = total_quantity;
    }

    public Integer getAvailable_quantity() {
        return available_quantity;
    }

    public void setAvailable_quantity(Integer available_quantity) {
        this.available_quantity = available_quantity;
    }

    public List<Loan> getLoans() {
        return loans;
    }

    public List<Review> getReviews() {
        return reviews;
    }

    @Override
    public String toString(){
        return author;
    }

}