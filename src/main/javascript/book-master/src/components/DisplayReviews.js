import React , {useEffect, useState} from "react";
import axios from "axios";

function DisplayReviews ({results}) {
    const bookID = results.book.id;
    const [reviews, setReviews] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8080/book/reviews/"+bookID)
        .then(res=>setReviews(res.data))
        .catch(err=>console.log(err));

        if(Object.keys(results).length === 0){
            setShow(false);
        } else {
            setShow(true);
        }
    }, [])

    return (<div className="container mt-3" style={{display: (show ? 'block' : 'none')}}>
        <h3>Reviews:</h3>
        {reviews.map((review, index) => {
            return(
                <div key={index} className="row g-3">
                    <div  className='row mt-2'>
                        <div  className='col-3 mt-2'>
                            <p>User ID: {review.user.email}</p>
                        </div>
                        <div  className='col-3 mt-2'>
                            <p>User Rating: {review.rating}</p>
                        </div>
                    </div>
                    <div className='row'>
                        <p>Review:</p>
                        <p>"{review.review}"</p>
                    </div>
                </div>
            )
        })}
    </div>)

};

export default DisplayReviews;