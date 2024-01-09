package org.launchcode.bookmaster.user;

public class UserReviewDTO {
    private Integer id;
    private User user;
    private String review;
    private Integer rating;

    public UserReviewDTO(Integer id, User user, String review, Integer rating) {
        this.id = id;
        this.user = user;
        this.review = review;
        this.rating = rating;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

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
