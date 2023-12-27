import React , {useEffect, useState} from "react";
import axios from "axios";
import BooksList from "./BooksList"


function ReviewAndRating () {
    const [book, setBook] = useState("");
    const [user, setUser] = useState("");
    const [review, setReview] = useState("");
    const [rating, setRating] = useState("");


    const submitReview = async (e) => {
        e.preventDefault();
        console.log("Submited");

        try{
            const response = await axios.post("http://localhost:8080/reviews", {
                book,
                user,
                review,
                rating,
            });

            if (response.status === 200) {
                console.log("Review submitted successfully")
            } else {
                console.log("Submission failed")
            }
        } catch (error) {
            console.error("Error posting review", error)
        }
    };

    return <div className="container mt-5">
                <h3>Leave a review:</h3>
                <form className="row g-3" onSubmit={submitReview}>
                    

                    <div className='row mt-2'>
                        <div className='col-3 mt-2'>
                            <label htmlFor="book" className='form-label'>Book Title:</label>
                            <select className='form-control' id="book" name="book" value={book} onChange={(e) => setBook(e.target.value)} required>
                                <option>Select one</option>
                                <option></option>
                                <option></option>
                                <option></option>
                                <option></option>
                            </select>
                        </div>
                        <div className='col-3 mt-2'>
                            <label htmlFor="user" className='form-label'>User ID:</label>
                            <input type="text" className='form-control' id="user" name="user" placeholder="example@gmail.com" value={user} onChange={(e) => setUser(e.target.value)} required/>
                        </div>
                        <div className='col-3 mt-2'>
                            <label htmlFor='rating' className='form-label'>Star Rating: </label>
                            <select className='form-control' id='rating' name='rating' value={rating} onChange={(e) => setRating(e.target.value)} required>
                                <option></option>
                                <option>5 Stars</option>
                                <option>4 Stars</option>
                                <option>3 Stars</option>
                                <option>2 Stars</option>
                                <option>1 Stars</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className='row mt-3'>
                        <div className='form-floating'>
                            <textarea className='form-control' id="review" name='review' placeholder='Write review here' rows={5} value={review} onChange={(e) => setReview(e.target.value)}/>
                            <label className="ms-2" htmlFor='review' >Review:</label>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div>
                            <button type='submit' className="btn btn-success">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
}

export default ReviewAndRating;