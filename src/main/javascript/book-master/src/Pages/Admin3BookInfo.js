import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Admin4ShowBookLoanBy from "../components/Admin4ShowBookLoanBy";
import axios from "axios";
import { Link } from "react-router-dom"

const Admin3BookInfo = (props) => {

    const [bookLoansUsers, setBookLoansUsers]= useState([]);
    const URL_Loans = "http://localhost:8080/book/loan/"

    const { id } = useParams()
    const books = props.books
    const book = books.find(p => p.id === parseInt(id))
    const navigate = useNavigate();


    const removeBook = (event)=>{
        props.deleteBook(book.id)
        navigate("/admin_home/books")
    }

    const getBookLoansUsers = async (id) => {
        try {
            const response = await axios.get(URL_Loans + id);
            setBookLoansUsers(response.data);
          } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      const loansId = book.loans.map((loan)=>{
        return loan.id
      })

      useEffect(() => {
        getBookLoansUsers(id);
      }, [id]);



    return (
        <div className="form-group row" key= {book.id}>
            <Link to={`/admin_home/books/edit/${book.id}`}  state={{ book }}><button className="btn btn-primary">edit information</button></Link>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label"> Id: </label> 
                <label className="col-sm-2 col-form-label"> {book.id} </label> 
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label"> title:  </label> 
                <label className="col-sm-2 col-form-label"> {book.title} </label> 
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Author: </label> 
                <label className="col-sm-2 col-form-label"> {book.author} </label> 
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label"> Genre:  </label> 
                <label className="col-sm-2 col-form-label">{book.genre} </label> 
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label"> Total in Library: </label> 
                <label className="col-sm-2 col-form-label"> {book.total_quantity} </label> 
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label"> Total available to rent: </label> 
                <label className="col-sm-2 col-form-label"> {book.available_quantity} </label> 
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label"> ISBN: </label> 
                <label className="col-sm-2 col-form-label"> {book.isbn} </label> 
            </div>

            <div className="form-group row">
                <h2 className="col-sm-2 col-form-label"> User's lended to: </h2> 
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>id</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Date loan out</th>
                            <th>Date returned</th>

                        </tr>
                        </thead>

                        <Admin4ShowBookLoanBy books={books} bookLoansUsers={bookLoansUsers} loansId={loansId}/>       
                </table>
            </div>

            

            <button  onClick={removeBook} className="btn btn-danger">Delete Book</button>

      </div>)
}

export default Admin3BookInfo;