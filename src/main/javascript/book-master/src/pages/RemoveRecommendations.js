import React , {useState, useRef, useEffect} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DeleteRecommendation from "../components/DeleteRecommendation";

const RemoveRecommendations=()=> {
    const [userID, setUserID] = useState(0);
    const [password, setPassword] = useState("");
    const isValid = useRef(false);
    const [recommendData, setRecommendData] = useState([]);
    const [users, setUsers] = useState([]);
    const show = useRef(false);;
    const navigate = useNavigate();

    const checkUserInfo = () => {
        users.map((user) => {
            if(user.id == userID && user.password == password){
                isValid.current = true;
            }
        })
    }

    useEffect(() => {
        axios.get("http://localhost:8080/api/user/all")
            .then(res=>setUsers(res.data))
            .catch(err=>console.log(err));
    }, []);

    const displayRecommends = (e) => {
        e.preventDefault();

        checkUserInfo();

        if(isValid.current){
            axios.get('http://localhost:8080/recommendation/search?idType=user&idValue='+userID)
                .then(res=>setRecommendData(res.data))
                .catch(err=>console.log(err));
            show.current = true;
        }
    }

    return(
            <>
                <div className='container mt-3'>
                    <h2>Enter User ID & Password </h2>
                    <form onSubmit = {displayRecommends}>
                        <label> User ID:
                        <input type="number" placeholder="ID Number" value={userID}
                            onChange={e=>setUserID(e.target.value)}/>
                        </label>
                        <br></br>
                        <label> Password:
                        <input type="text" placeholder="Enter Password" value={password}
                            onChange={e=>setPassword(e.target.value)}/>
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                </div>

                <div id="resultsDiv" style={{display: (show ? 'block' : 'none')}}>
                    <DeleteRecommendation results={recommendData} />
                </div>
            </>)
}

export default RemoveRecommendations;