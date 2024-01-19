import React, {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function UserSignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted')
        setSuccess(true);
        setEmail('');
        setPassword('');


        try {
            const response = await axios.post("http://localhost:8080/api/user/login", {
                email,
                password,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            });

           const accessToken = response.data.token;
           localStorage.setItem('accessToken', accessToken);
           console.log(localStorage);

        } catch (error) {
            if (axios.isCancel(error)) {
                console.error('Request canceled:', error.message);
            } else if (error.response) {
                // The request was made, but the server responded with an error status code
                console.error('HTTP error during login:', error.response.status, error.response.data);
            } else if (error.request) {
                // The request was made, but no response was received
                console.error('No response received during login:', error.request);
            } else {
                // Something happened in setting up the request that triggered an error
                console.error('Request setup error during login:', error.message);
            }
        }
    };

    return (
        <div className='container mt-5'>
            <h3>Log In</h3>
                <form className='row g-3' onSubmit={handleSubmit}>
                    <div className='col-md-6'>
                        <label htmlFor='email' className='form-label'>User Name:</label>
                        <input type='text' className='form-control' id='email' required
                        value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className='col-md-6'>
                        <label htmlFor="password" className='form-label'>Password:</label>
                        <input type='password' className='form-control' id='password' required
                        value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div>
                        <button type='submit' className="btn btn-success">Submit</button>
                    </div>             
                </form>
                <div className="container mt-5">
                    <h5>Not registered?</h5>
                    <Link to="/user_registration">Sign Up</Link>
                </div>
        </div>
            )
        }

        export default UserSignIn;