import React , {useState} from 'react';
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const CreateRecommendation=()=> {
    const location = useLocation();
    const obj = location.state;
    const [userID, setUserID] = useState(0);
    const [valid, setValid] = useState(false);
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    axios.get("http://localhost:8080/api/user/all")
    .then(res=>setUsers(res.data))
    .catch(err=>console.log(err));

    console.log(obj.bookId);

    const checkUserID = () => {
        users.map((user) => {
            if(user.id == userID){
                setValid(true);
            }
        })
    }

    const createRecommendation = (e) => {
        e.preventDefault();

        checkUserID();

        console.log(valid);

        /*const recommendation = {'bookId': bookId, 'userId': userID};

        const config = {
            method: 'post',
            url: 'http://localhost:8080/recommendation/save',
            headers: {'Content-Type':'application/json'},
            data: JSON.stringify(recommendation)
        };

        axios(config)
        .then((response) => {console.log(response);})
        .catch(err => console.log(err.response.data.message));*/

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