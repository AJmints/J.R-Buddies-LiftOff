package org.launchcode.bookmaster.review;

public enum Rating {
    BAD(1),
    BORING(2),
    OK(3),
    GOOD(4),
    GREAT(5);
    private Integer points;

    Rating(Integer points) {
        this.points = points;
    }


}
