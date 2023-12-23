package org.launchcode.bookmaster.book;

import java.lang.reflect.Array;
import java.util.ArrayList;

public class BookData {

    public static ArrayList<Book> findByValue(String searchValue, Iterable<Book> allBooks){
        ArrayList<Book> results = new ArrayList<>();

        for(Book book:allBooks){
            if(book.getAuthor().toLowerCase().contains(searchValue.toLowerCase())){
                results.add(book);
            } else if(book.getTitle().toLowerCase().contains(searchValue.toLowerCase())){
                results.add(book);
            }
        }

        return results;
    }

    public static ArrayList<Book> findByColumn(String column, String searchValue, Iterable<Book> allBooks){
        ArrayList<Book> results = new ArrayList<>();

        if(searchValue.toLowerCase().equals("all")){
            return (ArrayList<Book>) allBooks;
        }
        if(column.equals("all")){
            results = findByValue(searchValue, allBooks);
        }
        else{
            for(Book book:allBooks){

            }
        }


        return results;
    }
}
