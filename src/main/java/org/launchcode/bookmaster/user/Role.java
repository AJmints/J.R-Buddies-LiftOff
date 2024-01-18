package org.launchcode.bookmaster.user;


import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.launchcode.bookmaster.abstractEntity.AbstractEntity;

public class Role extends AbstractEntity {

    private String role;
}
