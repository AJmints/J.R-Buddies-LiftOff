import React, { useEffect, useState } from 'react';
import {useLocation} from "react-router-dom";
import ReviewAndRating from "../components/ReviewAndRating";
import DisplayReviews from '../components/DisplayReviews';
import axios from 'axios';

const DisplayBook=()=> {
    const location = useLocation();
    const obj = location.state;
    let available = "";
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState("");
    const [userId, setUserId] = useState("");
    const [ bookCheckout, setBookCheckout ] = useState(true);
    
    useEffect(() => {
        axios.get("http://localhost:8080/api/user/all")
        .then(res=>setUsers(res.data))
        .catch(err=>console.log(err));
    }, [])

    const selectUser = (e)=>{
        setUserId(e.target.value);

        axios.get("http://localhost:8080/api/user/"+userId)
            .then(res=>setUser(res.data))
            .catch(err=>console.log(err));

        console.log(user);
    }

    const handleCheckout = (e) => {
        e.preventDefault();

        

    }
    
    if(obj.book.available_quantity > 0){
        available = "Copies Available: " + obj.book.available_quantity;
    }
    else{
        available = "All Copies Are Currently Checked Out";
    }

    return(
    <>
        <div className='container mt-3'>
            
            <table>
                <tr>
                    <td>
                        <table>
                            <tr>
                                <img
                                    src={obj.book.thumbnail}
                                    width="300"
                                    height="400"
                                />
                            </tr>
                        </table>
                    </td>
                    <td> 
                        <div className='col-3 mb-4'>
                            <label htmlFor="user" className='form-label'>User ID: {user.email}</label>
                            <select className="form-control" onClick={selectUser}>
                            {users.map((user, index) => {
                                return(
                                    <option key={index} value={user.id}>{user.email}</option>)
                            })}
                            </select>
                        </div>
                        <button style={{marginRight: 14 + 'em'}}>Recommend Book</button> 
                        <button style={{marginRight: 14 + 'em'}}>Check Book Out</button>
                        <br></br>
                        <br></br>
                        <table>
                            <tr>
                                <h2>Title: {obj.book.title}</h2>
                            </tr>
                            <tr>
                                <h3>Author: {obj.book.author}</h3>
                            </tr>
                            <tr>
                                <h5>Genre: {obj.book.genre}</h5>
                            </tr>
                            <tr>
                                <h5>{available}</h5>
                            </tr>
                            <tr>
                                <h6>{obj.book.description}</h6>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>

        <div className='container-fluid mb-4'>
            <ReviewAndRating results={[obj, user]}/>
        </div>

        <div className='container-fluid pb-5 mb-5'>
            <DisplayReviews results={obj}/>
        </div>

    </>
    
    );
}

export default DisplayBook;