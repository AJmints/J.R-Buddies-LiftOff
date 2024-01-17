import React, {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function UserSignIn() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("localhost:8080/api/user/login", {
                username,
                password,
            });

            if (response.status === 200) {
                console.log("Login successful");
                console.log(response)
            } else {
                console.error("Authentication failed");
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    return (
        <div className='container mt-5'>
            <h3>Log In</h3>
                <form className='row g-3' onSubmit={handleSubmit}>
                    <div className='col-md-6'>
                        <label htmlFor='username' className='form-label'>User Name:</label>
                        <input type='text' className='form-control' id='username' required
                        value={username} onChange={(e) => setUsername(e.target.value)}/>
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