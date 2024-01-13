package org.launchcode.bookmaster.recommendation;

import org.launchcode.bookmaster.book.Book;
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

    @GetMapping("/search")
    public Iterable<Recommendation> listRecommendations(@RequestParam String idType, @RequestParam String idValue) {
        Iterable<Recommendation> recommendations;

        recommendations = RecommendationData.findByColumn(idType, Integer.valueOf(idValue), recommendationRepository.findAll());

        return recommendations;
    }

    @GetMapping("/specific_search")
    public Recommendation findRecommendation(@RequestParam String userId, @RequestParam String bookId) {
        Recommendation recommendation;

        recommendation = RecommendationData.findSpecificRecommendation(Integer.valueOf(userId), Integer.valueOf(bookId), recommendationRepository.findAll());

        return recommendation;
    }
}
