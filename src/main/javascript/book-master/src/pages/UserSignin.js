import React from "react";

function signin() {
    return (
         <div class='container mt-5'>
            <h3>Log In</h3>
            <form class='row g-3'>
                <div class='col-md-6'>
                    <label for='username' class='form-label'>User Name:</label>
                    <input type='text' class='form-control' id='username' required/>
                </div>
                <div class='col-md-6'>
                    <label for="password" class='form-label'>Password:</label>
                    <input type='password' class='form-control' id='password' required/>
                </div>
                <div>
                    <button type='submit' class="btn btn-success">Submit</button>
                </div>             
            </form> 
            <a href="/registration">Click here to register</a>
        </div>
            )
        }

        export default signin