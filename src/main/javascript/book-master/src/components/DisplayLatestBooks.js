
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DisplayLatestBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/book/all")
    .then(res=>setBooks(res.data))
    .catch(err=>console.log(err));
    }, []);


    return <div>
    <h2>Latest books added to library:</h2>
        <div className="bookList_container container">
            {books.slice((books.length-5), books.length).map((book, index) => {
                return(
                    <div key={index}>
                        <br></br>
                        <figure className="bookCard">
                            <img src={book.thumbnail} width="200" height="300"/>
                        </figure>
                        <div className="cardBottom">
                            <h5>{book.title}</h5>
                        </div>
                    </div>)
                })
            }
        </div>
    </div>
};

export default DisplayLatestBooks;