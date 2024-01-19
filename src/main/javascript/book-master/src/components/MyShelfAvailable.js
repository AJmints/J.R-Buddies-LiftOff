import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

const MyShelf = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from your Spring Boot backend
    fetch('http://localhost:8080/book/all') // Update the URL with your actual backend URL
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  const availableBooks = books.filter(book => book.available_quantity > 0);

  return (
    <div className='col-md-9'>
      <h2>Available From My Shelf</h2>

      {availableBooks.length > 0 ? (
        <table className="table table-striped">
          <tbody>
            <tr>
              {availableBooks.slice(0, 7).map(book => (
                <td key={book.id}>
                  <img
                    src={book.thumbnail}
                    alt={book.title}
                    onClick={() => navigate(`/displaybook`, { state: { book } })}
                  />
                  <p>{book.title}</p>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No books available</p>
      )}
    </div>
  );
};

export default MyShelf;
