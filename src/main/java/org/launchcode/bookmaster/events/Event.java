package org.launchcode.bookmaster.events;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import org.launchcode.bookmaster.abstractEntity.AbstractEntity;
import org.launchcode.bookmaster.loan.Loan;
import org.launchcode.bookmaster.review.Review;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@Entity
public class Event extends AbstractEntity {

    private String name;
    private String detail;
    private Date date;

    public Event(String name, String detail, Date date) {
        this.name = name;
        this.detail = detail;
        this.date = date;
    }

    public Event() {}

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @Override
    public String toString(){
        return name;
    }

}