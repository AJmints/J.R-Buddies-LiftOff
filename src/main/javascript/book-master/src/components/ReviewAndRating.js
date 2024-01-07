import React , {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function ReviewAndRating ({results}) {
    const [book, setBook] = useState("");
    const [user, setUser] = useState("");
    const [review, setReview] = useState("");
    const [rating, setRating] = useState(5);
    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState("");
    const bookID = results.book.id

    useEffect(() => {
        axios.get("http://localhost:8080/api/user/all")
        .then(res=>setUsers(res.data))
        .catch(err=>console.log(err));

        axios.get("http://localhost:8080/book/"+bookID)
        .then(res=>setBook(res.data))
        .catch(err=>console.log(err));
    }, [])

    const selectUser = (e)=>{
        setUserId(e.target.value);

        axios.get("http://localhost:8080/api/user/"+userId)
            .then(res=>setUser(res.data))
            .catch(err=>console.log(err));
    }

    const submitReview = async (e) => {
        e.preventDefault();

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
        window.location.reload();
    };

    return <div className="container mt-5">
                <h3>Leave a book review:</h3>
                <form className="row g-3" onSubmit={submitReview}>
                    <div className='row mt-2'>
                        <div className='col-3 mt-2'>
                            <label htmlFor="user" className='form-label'>User ID:</label>
                            <select className="form-control" id="user" name="user" onChange={selectUser} required>
                                <option>Select your user email</option>
                            {users.map((user, index) => {
                                return(
                                    <option key={index} value={user.id}>{user.email}</option>)
                            })}
                            </select>
                        </div>
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