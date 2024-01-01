package org.launchcode.bookmaster.recommendation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/recommendation")
@CrossOrigin
public class RecommendationController {

    @Autowired
    private RecommendationRepository recommendationRepository;

    @PostMapping("/save")
    public Recommendation saveRecommendation(@RequestBody Recommendation newRecommendation){
        return recommendationRepository.save(newRecommendation);
    }

    @GetMapping("/{recommendationId}")
    public Recommendation getByUser(@PathVariable Integer recommendationId){
        return recommendationRepository.findById(recommendationId).orElseThrow();
    }

    @GetMapping("/all")
    public Iterable<Recommendation> getAllRecommendations(){
        return recommendationRepository.findAll();
    }

    @DeleteMapping("/{recommendationId}")
    public void deleteRecommendation(@PathVariable Integer recommendationId){
        recommendationRepository.deleteById(recommendationId);
    }
}
