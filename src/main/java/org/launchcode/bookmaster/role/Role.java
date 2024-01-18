package org.launchcode.bookmaster.role;


import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.launchcode.bookmaster.abstractEntity.AbstractEntity;

@Data
@EqualsAndHashCode(callSuper=true)
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Role extends AbstractEntity {

    private String role;
}
