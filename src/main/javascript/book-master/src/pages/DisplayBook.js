import React, { useEffect, useState } from 'react';
import {useLocation} from "react-router-dom";
import ReviewAndRating from "../components/ReviewAndRating";
import DisplayReviews from '../components/DisplayReviews';
import axios from 'axios';

const DisplayBook=()=> {
    const location = useLocation();
    const obj = location.state;
    let available = "";
    const book = obj.book
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState("");
    const [userId, setUserId] = useState("");
    const loanDateOut = new Date()
    function calcLoanDateOut(date) {
        date.setDate(date.getDate() + 7*3);
        return date
    }
    const loanDateIn = calcLoanDateOut(new Date);
    const [bookCheckout, setBookCheckout] = useState(false);
    const title = book.title;
    const author = book.author;
    const isbn = book.isbn;
    const genre = book.genre;
    const total_quantity = book.total_quantity;
    const available_quantity = (Number(book.available_quantity)-1);

    useEffect(() => {
        axios.get("http://localhost:8080/api/user/all")
        .then(res=>setUsers(res.data))
        .catch(err=>console.log(err));    
    }, [])

    const selectUser = (e)=>{
        setUserId(e.target.value);

        axios.get("http://localhost:8080/api/user/"+userId)
            .then(res=>setUser(res.data))
            .catch(err=>console.log(err));
    }

    const handleCheckout = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/loan", {book, user, loanDateOut, loanDateIn})
        .then(function(res) {
            // on successful post subtracts 1 from available quantity
            axios.put("http://localhost:8080/book/"+book.id, {title, author, isbn, genre, total_quantity, available_quantity})
            .then(function(res) {
                setBookCheckout(true);
            })
            .catch(err=>console.log(err));

        })
        .catch(err=>console.log(err))

    }
    
    if(obj.book.available_quantity > 0){
        available = "Copies Available: " + obj.book.available_quantity;
    }
    else{
        available = "All Copies Are Currently Checked Out";
    }

    // const saveForLater = async () => {
    //     try {
    //         const userId = '1';
    //           // Make a POST request to your backend API
    //         const response = await fetch('http://localhost:8080/myshelf/saveBook', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json', // Set the appropriate content type
    //             // Add any additional headers if needed
    //             },
    //             // You may need to send some data with the request (e.g., book information)
    //             body: JSON.stringify({ 
    //                 userId: userId,
    //                 bookId: obj.book.id
    //             }),
    //           });
        
    //         if (response.ok) {
    //             console.log('Book saved for later successfully.');
    //             // You can perform any additional actions here
    //         } else {
    //             console.error('Failed to save book for later.');
    //         }
    //         } catch (error) {
    //         console.error('Error:', error);
    //         }
    //       };

    return(
    <>
        <div className='container mt-3'>
            
            <table>
                <tr>
                    <td>
                        <table>
                            <tr>
                                <img
                                    src={obj.book.thumbnail}
                                    width="300"
                                    height="400"
                                />
                            </tr>
                        </table>
                    </td>
                    <td> 
                        <div className='col-3 mb-4'>
                            <label htmlFor="user" className='form-label'>User ID: {user.email}</label>
                            <select className="form-control" onClick={selectUser}>
                                {users.map((user, index) => {
                                    return(
                                    <option key={index} value={user.id}>{user.email}</option>)
                                })}
                            </select>
                        </div>
                        <button style={{marginRight: 14 + 'em'}}>Recommend Book</button>
                        {/* <button style={{marginRight: 14 + 'em'}} onClick={saveForLater}>Save For Later</button> */}

                        {obj.book.available_quantity > 0 ? (
                            <>
                            <button style={{marginRight: 14 + 'em'}} onClick={handleCheckout}>Check Book Out</button>
                            {bookCheckout && (<p className='text-success'>Book Successfully Checked out!</p>)}
                            </>
                        ) : (
                            <button style={{marginRight: 14 + 'em'}}>Place Hold</button> 
                        )}
                        
                        
                        <br></br>
                        <br></br>
                        <table>
                            <tr>
                                <h2>Title: {obj.book.title}</h2>
                            </tr>
                            <tr>
                                <h3>Author: {obj.book.author}</h3>
                            </tr>
                            <tr>
                                <h5>Genre: {obj.book.genre}</h5>
                            </tr>
                            <tr>
                                <h5>{available}</h5>
                            </tr>
                            <tr>
                                <h6>{obj.book.description}</h6>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>

        <div className='container-fluid mb-4'>
            <ReviewAndRating objects={[obj.book, user]}/>
        </div>

        <div className='container-fluid pb-5 mb-5'>
            <DisplayReviews objects={obj}/>
        </div>

    </>
    
    );
}

export default DisplayBook;