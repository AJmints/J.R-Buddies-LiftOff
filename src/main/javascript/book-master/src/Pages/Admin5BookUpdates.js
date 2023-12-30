import { useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"

const Admin5BookUpdate = (props) => {
    const location = useLocation()
    const { book } = location.state
    const navigate = useNavigate();

    const [editForm, setEditForm] = useState(book)
    const handleChange = event => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value })
      }
      const handleSubmit = event => {
        event.preventDefault()
        props.updateBook(editForm, book.id)
        navigate("/admin_home/books")
      }
      console.log(editForm)

    return (
        <div className="book">
            <form onSubmit={handleSubmit}>
                <br></br>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Book's Title: </label>
                <div className="col-sm-10 w-50">
                    <input
                        type="text"
                        value={editForm.title}
                        name="title"
                        placeholder="book's title"
                        onChange={handleChange}
                        /> 
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Book's Author: </label>
                <div className="col-sm-10 w-50">
                    <input
                    type="text"
                    value={editForm.author}
                    name="author"
                    placeholder="Book's author "
                    onChange={handleChange}
                    />
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Book's Isbn: </label>
                <div className="col-sm-10 w-50">
                    <input
                    type="text"
                    value={editForm.isbn}
                    name="isbn"
                    placeholder="isbn"
                    onChange={handleChange}
                    />
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Book's Genre: </label>
                <div className="col-sm-10 w-50">
                    <input
                    type="text"
                    value={editForm.gender}
                    name="gender"
                    placeholder="gender"
                    onChange={handleChange}
                    />
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Total Books in Library: </label>
                <div className="col-sm-10 w-50">
                    <input
                    type="text"
                    value={editForm.total_quantity}
                    name="total_quantity"
                    placeholder="Book's total quantity"
                    onChange={handleChange}
                    />
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Total Books available to rent: </label>
                <div className="col-sm-10 w-50">
                    <input
                    type="text"
                    value={editForm.available_quantity}
                    name="available_quantity"
                    placeholder="Book's available quantity"
                    onChange={handleChange}
                    />
                </div>
            </div>
                <input type="submit" value="Update book" />
            </form>

        </div>
    );
};

export default Admin5BookUpdate;