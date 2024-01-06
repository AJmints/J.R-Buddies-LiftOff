package org.launchcode.bookmaster.book;

public class BookReviewsDTO {
    private Book book;
    private String review;
    private Integer rating;

    public BookReviewsDTO(Book book, String review, Integer rating) {
        this.book = book;
        this.review = review;
        this.rating = rating;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
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
