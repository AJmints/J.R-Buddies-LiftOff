package org.launchcode.bookmaster.recommendation;

import jakarta.persistence.Entity;
import org.launchcode.bookmaster.abstractEntity.AbstractEntity;
import org.launchcode.bookmaster.user.Role;

@Entity
public class Recommendation extends AbstractEntity {
    private Integer bookId;

    private Integer userId;

    public Recommendation() {
    }

    public Recommendation(Integer bookId, Integer userId) {
        this.bookId = bookId;
        this.userId = userId;
    }

    public Integer getBookId() {
        return bookId;
    }

    public void setBookId(Integer bookId) {
        this.bookId = bookId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }
}
