package org.launchcode.bookmaster.book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/book")
@CrossOrigin
public class BookController {

    @Autowired
    private BookRepository bookRepository;

    @PostMapping("/save")
    public Book saveBook(@RequestBody Book newBook){
        return bookRepository.save(newBook);
    }

    @GetMapping("/all")
    public Iterable<Book> getBooks(){
        return bookRepository.findAll();
    }

    @GetMapping("/{bookId}")
    public Book getBook(@PathVariable Integer bookId){
        return bookRepository.findById(bookId).orElseThrow();
    }

    @DeleteMapping("/{bookId}")
    public void deleteBook(@PathVariable Integer bookId) {
        bookRepository.deleteById(bookId);
    }

    @PutMapping("/{bookId}")
    public Book updateBook(@PathVariable Integer bookId, @RequestBody Book updatedBook) {
        Book book = bookRepository.findById(bookId).orElseThrow();
        book.setTitle(updatedBook.getTitle());
        book.setAuthor(updatedBook.getAuthor());
        book.setIsbn(updatedBook.getIsbn());
        book.setGender(updatedBook.getGenre());
        book.setTotal_quantity(updatedBook.getTotal_quantity());
        book.setAvailable_quantity(updatedBook.getAvailable_quantity());

        return bookRepository.save(book);

    }
}
