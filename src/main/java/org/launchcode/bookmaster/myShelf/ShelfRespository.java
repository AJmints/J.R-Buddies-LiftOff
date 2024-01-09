package org.launchcode.bookmaster.myShelf;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ShelfRespository extends CrudRepository<Shelf, Integer> {

    List<Shelf> findByUserId(Integer userId);

}
