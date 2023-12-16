import React from "react";
import { Link } from "react-router-dom";

function UserSignIn() {
    return (
        <div className='container mt-5'>
            <h3>Log In</h3>
                <form className='row g-3'>
                    <div className='col-md-6'>
                        <label htmlFor='username' className='form-label'>User Name:</label>
                        <input type='text' className='form-control' id='username' required/>
                    </div>
                    <div className='col-md-6'>
                        <label htmlFor="password" className='form-label'>Password:</label>
                        <input type='password' className='form-control' id='password' required/>
                    </div>
                    <div>
                        <button type='submit' className="btn btn-success">Submit</button>
                    </div>             
                </form> 
                <Link to="/user_registration">Registration</Link>
        </div>
            )
        }

        export default UserSignIn;