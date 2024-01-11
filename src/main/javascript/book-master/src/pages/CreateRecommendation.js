import React , {useState, useRef} from 'react';
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import UserRecommendationListing from "../components/UserRecommendationListing";

const CreateRecommendation=()=> {
    const location = useLocation();
    const obj = location.state;
    const [userID, setUserID] = useState(0);
    const isValid = useRef(false);
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    const checkUserID = () => {
        users.map((user) => {
            if(user.id == userID){
                isValid.current = true;
            }
        })
    }

    const createRecommendation = (e) => {
        e.preventDefault();

        axios.get("http://localhost:8080/api/user/all")
            .then(res=>setUsers(res.data))
            .catch(err=>console.log(err));

        checkUserID();

        if(isValid.current){
            const recommendation = {'bookId': obj.book.id, 'userId': userID};

            const config = {
                method: 'post',
                url: 'http://localhost:8080/recommendation/save',
                headers: {'Content-Type':'application/json'},
                data: JSON.stringify(recommendation)
            };

            axios(config)
            .then((response) => {navigate('/recommendation_success');})
            .catch(err => console.log(err.response.data.message));
        }
    }

    return(
            <>
                <div className='container mt-3'>
                    <h2>Enter User ID: </h2>
                    <form onSubmit = {createRecommendation}>
                        <input type="number" placeholder="ID Number" value={userID}
                            onChange={e=>setUserID(e.target.value)}/>
                        <button type="submit">Submit ID</button>
                    </form>
                </div>
            </>)
}

export default CreateRecommendation;