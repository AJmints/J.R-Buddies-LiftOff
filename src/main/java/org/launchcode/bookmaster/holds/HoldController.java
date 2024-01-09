package org.launchcode.bookmaster.holds;

import org.launchcode.bookmaster.loan.Loan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/hold")
public class HoldController {

    @Autowired
    private HoldRepository holdRepository;

    @PostMapping
    public Hold saveHold(@RequestBody Hold newHold){
        return holdRepository.save(newHold);
    }

    @GetMapping("/all")
    public Iterable<Hold> getAllHolds(){
        return holdRepository.findAll();
    }

    @GetMapping("/{holdId}")
    public Hold getHold(@PathVariable Integer holdId){
        return holdRepository.findById(holdId).orElseThrow();
    }

    @DeleteMapping("/{holdId}")
    public void deleteHold(@PathVariable Integer holdId) {
        holdRepository.deleteById(holdId);
    }

}
