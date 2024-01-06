package org.launchcode.bookmaster.user;

public class UserReviewDTO {
    private User user;
    private String review;
    private Integer rating;

    public UserReviewDTO(User user, String review, Integer rating) {
        this.user = user;
        this.review = review;
        this.rating = rating;
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
