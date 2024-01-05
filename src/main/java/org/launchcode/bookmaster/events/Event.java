package org.launchcode.bookmaster.events;

import jakarta.persistence.Entity;
import org.launchcode.bookmaster.abstractEntity.AbstractEntity;

import java.time.LocalDate;


@Entity
public class Event extends AbstractEntity {

    private String name;
    private String details;

    private LocalDate date;

    public Event(String name, String detail, LocalDate date) {
        this.name = name;
        this.details = details;
        this.date = date;
    }

    public Event() {}

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    @Override
    public String toString(){
        return name;
    }



}