import React , {useEffect, useState} from "react";
import axios from "axios";


function ReviewAndRating ({objects}) {
    const [review, setReview] = useState("");
    const [rating, setRating] = useState(5);
    const book = objects[0];
    const user = objects[1];

    const submitReview = (e) => {
        e.preventDefault();
        console.log(book,user,review,rating)

        axios.post("http://localhost:8080/reviews", {book,user,review,rating})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))

        window.location.reload();
    }
    

    return <div className="container mt-5">
                <h3>Leave a book review:</h3>
                <form className="row g-3" onSubmit={submitReview}>
                    <div className='row mt-2'>
                        <div className='col-3 mt-2'>
                            <label htmlFor='rating' className='form-label'>Star Rating: </label>
                            <select className='form-control' id='rating' name='rating' onChange={(e) => setRating(e.target.value)} required>
                                <option value={5}>5 Stars</option>
                                <option value={4}>4 Stars</option>
                                <option value={3}>3 Stars</option>
                                <option value={2}>2 Stars</option>
                                <option value={1}>1 Stars</option>
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