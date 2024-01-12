import React , {useEffect, useState} from "react";
import axios from "axios";

function DisplayReviews ({objects}) {
    const bookID = objects.book.id;
    const [reviews, setReviews] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8080/book/reviews/"+bookID)
        .then(res=>setReviews(res.data))
        .catch(err=>console.log(err));

        if(Object.keys(objects).length === 0){
            setShow(false);
        } else {
            setShow(true);
        }
    }, [])

    return (<div className="container mt-3" style={{display: (show ? 'block' : 'none')}}>
        <h3>{objects.book.title} Book Reviews:</h3>
        {reviews.map((review, index) => {
            return(
                <div key={index} className="row g-3">
                    <div  className='row mt-2'>
                        <div  className='col-3 mt-2'>
                            <p><span style={{fontWeight: "bold"}}>User ID:</span> {review.user.email}</p>
                        </div>
                        <div  className='col-3 mt-2'>
                            <p><span style={{fontWeight: "bold"}}>User Rating:</span> {review.rating}</p>
                        </div>
                    </div>
                    <div className='row'>
                        <p><span style={{fontWeight: "bold"}}>Review:</span></p>
                        <p className="text-bg-light">"{review.review}"</p>
                    </div>
                </div>
            )
        })}
    </div>)

};

export default DisplayReviews;