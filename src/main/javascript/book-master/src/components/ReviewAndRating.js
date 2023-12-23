import { useState } from "react";

function ReviewAndRating () {
    const [inputs, setInputs] = useState({});
    const [book, setBook] = useState("");
    const [user, setUser] = useState("");
    const [review, setReview] = useState("");
    const [rating, setRating] = useState("");

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    const submitReview = (e) => {
        e.preventDefault();
        console.log(inputs);
    };

    return <div>
                <h3>Leave a review:</h3>
                <form onSubmit={submitReview}>
                    <div className='row mt-2'>
                        <div className='col-6'>
                            <label htmlFor="user" className='form-label'>User ID:</label>
                            <input type="text" className='form-control' id="user" name="user" placeholder="example@gmail.com" value={inputs.user || ""} onChange={handleChange} required/>
                        </div>
                    </div>
                    <div className='col-3 mt-2'>
                        <label htmlFor='rating' className='form-label'>Rating: </label>
                        <select className='form-control' id='rating' name='rating' value={inputs.stars} onChange={handleChange}>
                            <option name="rating" value={inputs.five_stars} onChange={handleChange}>5 Stars</option>
                            <option name="rating" value={inputs.four_stars} onChange={handleChange}>4 Stars</option>
                            <option name="rating" value={inputs.three_stars} onChange={handleChange}>3 Stars</option>
                            <option name="rating" value={inputs.two_stars} onChange={handleChange}>2 Stars</option>
                            <option name="rating" value={inputs.one_stars} onChange={handleChange}>1 Stars</option>
                         </select>
                    </div>
                    <div className='row mt-3'>
                        <div className='form-floating'>
                            <textarea className='form-control' id="review" name='review' placeholder='Write review here' rows={5} value={inputs.review || ""} onChange={handleChange}/>
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