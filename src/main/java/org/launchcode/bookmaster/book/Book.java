package org.launchcode.bookmaster.book;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import org.launchcode.bookmaster.abstractEntity.AbstractEntity;
import org.launchcode.bookmaster.loan.Loan;
import org.launchcode.bookmaster.review.Review;

import java.util.ArrayList;
import java.util.List;


@Entity
public class Book extends AbstractEntity {

    private String title;
    private String author;
    private String description;
    private String thumbnail;
    private String isbn;
    private String genre;
    private Integer total_quantity;
    private Integer available_quantity;


    @OneToMany(mappedBy = "book")
    private List<Loan> loans = new ArrayList<>();

    @OneToMany(mappedBy = "book")
    private List<Review> reviews = new ArrayList<>();

    public Book(String title, String author, String description, String thumbnail, String isbn, String genre, Integer total_quantity, Integer available_quantity) {
        this.title = title;
        this.author = author;
        this.description = description;
        this.thumbnail = thumbnail;
        this.isbn = isbn;
        this.genre = genre;
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

    public String getDescription() {
        return description;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public String getGenre() {
        return genre;
    }

    public void setGender(String genre) {
        this.genre = genre;
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

//    @JsonManagedReference
    public List<Loan> getLoans() {
        return loans;
    }
    public void setLoans(List<Loan> loans){
        this.loans = loans;
    }

//    @JsonManagedReference
    public List<Review> getReviews() {
        return reviews;
    }

    public void setReviews(List<Review> reviews) {
        this.reviews = reviews;
    }

    @Override
    public String toString(){
        return author;
    }

}