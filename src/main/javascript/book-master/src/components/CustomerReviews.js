import React , {useEffect, useState} from "react";
import axios from "axios";

function CustomerReviews () {
    const [userId, setUserId] = useState("");
    const [reviews, setReviews] = useState([]);
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState("");
    const [toggleDisplay, setToggleDisplay] = useState(true);
    const [reviewData, setReviewData] = useState([]);
    const [review, setReview] = useState("");
    const [rating, setRating] = useState(5);
    const [book, setBook] = useState("");
    const [bookId, setBookId] = useState("");
    

    useEffect(() => {
        axios.get("http://localhost:8080/api/user/all")
        .then(res=>setUsers(res.data))
        .catch(err=>console.log(err));
    }, [])

    const selectUser = (e) => {
        setUserId(e.target.value);
            
        axios.get("http://localhost:8080/api/user/reviews/"+userId)
        .then(res=>setReviews(res.data))
        .catch(err=>console.log(err));

        axios.get("http://localhost:8080/api/user/"+userId)
        .then(res=>setUser(res.data))
        .catch(err=>console.log(err));
    }

    const updateButton = (e) => {
        setToggleDisplay(false);
        const data = e.split(",");
        setBookId(data[2]);
        setReview(data[4])

        axios.get("http://localhost:8080/book/"+data[2])
        .then(res=>setBook(res.data))
        .catch(err=>console.log(err));

        setReviewData(data);
        console.log(bookId, user.email, rating, review)
    }

    const updateReview = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8080/reviews/"+reviewData[0], {book, user, review, rating})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))

        window.location.reload();
    }

    const deleteReviews = (e) => {

        axios.delete("http://localhost:8080/reviews/"+e)
        .then((res) => {console.log(`successfully deleted book review ${e}`);})
        .catch(err => console.log(err.res.data.message))

        window.location.reload();
    }

    return <div className="container mt-3 pb-5 mb-5" >
        <div id="user_update_review" style={{display: toggleDisplay ? "none" : "block"}}>
            <h3>Update review for {reviewData[1]} </h3>
                <form className="row g-3" onSubmit={updateReview}>
                    <div className='row mt-2'>
                        <div className='col-3 mt-2'>
                            <label htmlFor='rating' className='form-label'>Change Star Rating: </label>
                            <select className='form-control' id='rating' name='rating' onChange={(e) => setRating(e.target.value)}>
                                <option value={5}>5 Stars</option>
                                <option value={4}>4 Stars</option>
                                <option value={3}>3 Stars</option>
                                <option value={2}>2 Stars</option>
                                <option value={1}>1 Stars</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className='row mt-3'>
                        <div>
                            <label className="ms-2" htmlFor='review' >Review:</label>
                            <textarea className='form-control' id="review" name='review' placeholder={reviewData[4]} rows={5} value={review} onChange={(e) => setReview(e.target.value)}/>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div>
                            <button type='submit' className="btn btn-success">Submit</button>
                        </div>
                    </div>
            </form>
        </div>
        <div id="user_reviews" style={{display: toggleDisplay ? "block" : "none"}}>
            <div className='row mt-2'>
                <div className='col-3 mt-2 mb-3'>
                    <label htmlFor="user" className='form-label'>User ID: {user.email} </label>
                    <select className="form-control" onClick={selectUser} required>
                            {users.map((user, index) => {
                                    return(
                            <option key={index} value={user.id}>{user.email}</option>)
                                })}
                    </select>
                </div>
            </div>
            <h3>Book Reviews:</h3>
            {reviews.map((review, index) => {
                return(
                    <div key={index} className="row border border-3">
                        <div  className='row mt-2'>
                            <p><span style={{fontWeight: "bold"}}> Book:</span> {review.book.title}</p>
                        </div>
                        <div  className='row'>
                            <p><span style={{fontWeight: "bold"}}>User Rating:</span> {review.rating}</p>
                        </div>
                        <div className='row'>
                            <p><span style={{fontWeight: "bold"}}>Review:</span></p>
                            <p className="text-bg-light">"{review.review}"</p>
                        </div>
                        <div className="mb-2">
                            <button type='submit' className="btn btn-primary" value={[review.id, review.book.title, review.book.id, review.rating, review.review]} onClick={(e)=>updateButton(e.target.value)}>Update</button>
                            <button type='submit' className="btn btn-secondary" value={review.id} onClick={(e) => deleteReviews(e.target.value)}>Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>

};

export default CustomerReviews;