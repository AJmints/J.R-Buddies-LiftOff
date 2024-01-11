package org.launchcode.bookmaster.myShelf;

import org.launchcode.bookmaster.loan.Loan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/myshelf")
public class ShelfController {

    @Autowired
    private ShelfRespository shelfRespository;

    @PostMapping("/saveBook")
    public Shelf saveShelf(@RequestBody Shelf newShelf){
        return shelfRespository.save(newShelf);
    }

    @GetMapping("/{userId}")
    public List<Shelf> getShelfByUserId(@PathVariable Integer userId){
        return shelfRespository.findByUserId(userId);
    }


}
