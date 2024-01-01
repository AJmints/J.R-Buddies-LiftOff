package org.launchcode.bookmaster.recommendation;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecommendationRepository extends CrudRepository<Recommendation,Integer> {
    Recommendation getRecommendationById(int id);
}
