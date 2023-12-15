package org.launchcode.bookmaster.book;

import org.launchcode.bookmaster.abstractEntity.AbstractEntity;
import jakarta.persistence.Entity;


@Entity
public class Book extends AbstractEntity {

    private String title;
    private String author;
    private String isbn;
    private String gender;
    private Integer total_quantity;
    private Integer available_quantity;

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

    @Override
    public String toString(){
        return author;
    }

}