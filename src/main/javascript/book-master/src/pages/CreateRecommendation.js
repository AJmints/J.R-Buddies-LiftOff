import React , {useState} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateRecommendation=({bookId})=> {
    const [userID, setUserID] = useState(0);
    const navigate = useNavigate();

    const createRecommendation = (e) => {
        e.preventDefault();

        const recommendation = {'bookId': bookId, 'userId': userID};

        const config = {
            method: 'post',
            url: 'http://localhost:8080/recommendation/save',
            headers: {'Content-Type':'application/json'},
            data: JSON.stringify(recommendation)
        };

        axios(config)
        .then((response) => {console.log(response);})
        .catch(err => console.log(err.response.data.message));

        //navigate('/added_success');
    }

    return(
            <>
                <div className='container mt-3'>
                    <h2>Enter User ID: </h2>
                    <form onSubmit = {createRecommendation}>
                        <input type="number" placeholder="ID Number" value={userID}
                            onChange={e=>setUserID(e.target.value)}/>
                        <button type="submit">Search</button>
                    </form>
                </div>
            </>)
}

export default CreateRecommendation;