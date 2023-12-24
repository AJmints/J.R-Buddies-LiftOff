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

        if(searchValue.isEmpty() || searchValue.isBlank() || searchValue == null){
            return (ArrayList<Book>) allBooks;
        }
        if(column.equals("all")){
            results = findByValue(searchValue, allBooks);
        }
        else{
            for(Book book:allBooks){
                String colValue = getBookInfo(book, column);

                if(colValue != null && colValue.toLowerCase().contains(searchValue.toLowerCase())){
                    results.add(book);
                }
            }
        }

        return results;
    }

    public static String getBookInfo(Book book, String colName){
        String colValue;

        if(colName.equals("author")){
            colValue = book.getAuthor();
        }else{
            colValue = book.getTitle();
        }

        return colValue;
    }
}
