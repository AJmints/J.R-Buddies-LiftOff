package org.launchcode.bookmaster.review;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/reviews")
@CrossOrigin
public class ReviewController {

    @Autowired
    private ReviewRepository reviewRepository;

    @PostMapping
    public Review saveReview(@RequestBody Review review){

        return reviewRepository.save(review);
    }

    @GetMapping("/all")
    public Iterable<Review> getAllReviews(){
        return reviewRepository.findAll();
    }

    @GetMapping("/{reviewId}")
    public Review getReview(@PathVariable Integer reviewId){
        return reviewRepository.findById(reviewId).orElseThrow();
    }

    @DeleteMapping("/{reviewId}")
    public void deleteReview(@PathVariable Integer reviewId) {
        reviewRepository.deleteById(reviewId);

    }

    @PutMapping("/{reviewId}")
    public Review updateReview(@PathVariable Integer reviewId, @RequestBody Review updatedReview) {
        Review review = reviewRepository.findById(reviewId).orElseThrow();
        review.setReview(updatedReview.getReview());
        review.setRating(updatedReview.getRating());


        return reviewRepository.save(review);


    }
}