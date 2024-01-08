import React , {useEffect, useState} from "react";
import axios from "axios";

function CustomerReviews ({}) {
    const [userId, setUserId] = useState("");
    const [reviews, setReviews] = useState([]);
    const [users, setUsers] = useState([]);
    const [reviewId, setReviewId] = useState("");


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
    }

    const updateReviews = (e) => {

        axios.delete(`http://localhost:8080/reviews/${e}`)
        .then((res) => {console.log(`successfully deleted book review ${e}`);})
        .catch(err => console.log(err.res.data.message))
    }
    const deleteReviews = (e) => {

        axios.delete("http://localhost:8080/reviews/"+e)
        .then((res) => {console.log(`successfully deleted book review ${e}`);})
        .catch(err => console.log(err.res.data.message))

        const getuserid = document.getElementById("user");
        setUserId(getuserid);

        axios.get("http://localhost:8080/api/user/reviews/"+userId)
        .then(res=>setReviews(res.data))
        .catch(err=>console.log(err));
    }

    return <div className="container mt-3 pb-5 mb-5" >
        <div className='row mt-2'>
            <div className='col-3 mt-2 mb-3'>
                <label htmlFor="user" className='form-label'>User ID:</label>
                <select className="form-control" id="user" name="user" onChange={selectUser} required>
                    <option>Select your user email</option>
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
                        <button type='submit' className="btn btn-primary" onSubmit={updateReviews}>Update</button>
                        <button type='submit' className="btn btn-secondary" value={review.id} onClick={(e) => deleteReviews(e.target.value)}>Delete</button>
                    </div>
                </div>
            )
        })}
    </div>

};

export default CustomerReviews;