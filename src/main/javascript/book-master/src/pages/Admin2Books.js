import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

const Admin2Books = (props) => {
  const booksToDisplay = props.books
 
          const [books, setBooks] = useState(booksToDisplay)
          const [title, setTitle] = useState([])
          const navigate = useNavigate();
          
            
          useEffect(() => {setBooks(booksToDisplay)}, [booksToDisplay]);

          const handleChange = event => {
            setTitle(event.target.value )
          }

          const handleSubmit = event => {
            event.preventDefault()
            filterBooksByTitle(title)
            setTitle([])
          }

          const filterBooksByTitle = (title) =>{
            const searchBooks = books.filter((item)=>{
              return item.title.includes(title) 
            })
            setBooks(searchBooks)
          }

          const displayed = books.map((book)=>{
            return (
                <tr key= {book.id}>
                    <td>
                        <Link  to={`/admin_home/books/${book.id}`}>{book.title}</Link>
                    </td>
                    <td>
                        <Link to={`/admin_home/books/${book.id}`}>{book.author}</Link>
                    </td>
                </tr>
            )
          })
      
    return (
      <>
        <br></br>
        <div className="container mt-3">
            <form onSubmit={handleSubmit} className="row g-2 align-items-center">
                     <div className="col-auto">
                          <input
                            type="text"
                            id="title"
                            value={title}
                            name="title"
                            className="form-control"
                            placeholder="Book's title"
                            onChange={handleChange}
                          />
                      </div>
                      <div className="col-auto">
                          <button type="submit"  className="btn btn-primary">Search Book</button>
                      </div>
                      <div className="col-auto">
                          <button type="submit" className="btn btn-success" onClick={() => navigate("/search")}>Get More Books to the Library</button>
                      </div>
            </form>
        </div>
       <div className="container">
            <br></br>
            <h2>Books Available:</h2>
            <br></br>
                {
                  displayed.length === 0? <h2>No books to show</h2> 
                                                    :
                                          <table className="table table-striped">
                                              <thead className="thead-dark">
                                                <tr>
                                                  <th scope="col">Title</th>
                                                  <th scope="col">Author</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                {displayed}
                                              </tbody>
                                          </table>
                }
        </div> 
        </>
        
      );
};

export default Admin2Books;