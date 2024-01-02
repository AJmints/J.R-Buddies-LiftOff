package org.launchcode.bookmaster.recommendation;


import java.util.ArrayList;

public class RecommendationData {
    public static ArrayList<Recommendation> findByUser(Integer userId, Iterable<Recommendation> allRecommendations){
        ArrayList<Recommendation> results = new ArrayList<>();

        for(Recommendation recommendation:allRecommendations){
            if(recommendation.getUserId().equals(userId)){
                results.add(recommendation);
            }
        }

        return results;
    }

    public static ArrayList<Recommendation> findByBook(Integer bookId, Iterable<Recommendation> allRecommendations){
        ArrayList<Recommendation> results = new ArrayList<>();

        for(Recommendation recommendation:allRecommendations){
            if(recommendation.getBookId().equals(bookId)){
                results.add(recommendation);
            }
        }

        return results;
    }

    public static ArrayList<Recommendation> findByColumn(String idType, Integer idValue, Iterable<Recommendation> allRecommendations){
        ArrayList<Recommendation> results = new ArrayList<>();

        if(idType.equalsIgnoreCase("user")){
            results = findByUser(idValue, allRecommendations);
        }
        else{
            results = findByBook(idValue, allRecommendations);
        }

        return results;
    }
}
