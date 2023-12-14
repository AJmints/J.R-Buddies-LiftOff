import React from "react";

function Registration() {
    return (
         <div class='container mt-5'>
            <h3>Registration Form</h3>
            <form class='row g-3'>
                <div class='col-md-6'>
                    <label for='fname' class='form-label'>First Name:</label>
                    <input type='text' class='form-control' id='fname' required/>
                </div>
                <div class='col-md-6'>
                    <label for="lname" class='form-label'>Last Name:</label>
                    <input type='text' class='form-control' id='lname' required/>
                </div>
                <div class='col-md-8'>
                    <label for="email" class='form-label'>Email:</label>
                    <input type='email' class='form-control' id='email' required/>
                </div>
                <div class='col-md-4'>
                    <label for="pnumber" class='form-label'>Phone number:</label>
                    <input type='text' class='form-control' id='pnumber'/>
                </div>
                <div class='col-md-12'>
                    <label for="address" class='form-label'>Address:</label>
                    <input type='text' class='form-control' id='address' required/>
                </div>
                <div class='col-md-6'>
                    <label for="password" class='form-label'>Password:</label>
                    <input type='password' class='form-control' id='password' required/>
                </div>
                <div class='col-md-6'>
                    <label for="verify" class='form-label'>Verify Password:</label>
                    <input type='password' class='form-control' id='verify' required/>
                </div>
                <div>
                    <button type='submit' class="btn btn-success">Submit</button>
                </div>
                                
            </form> 
        </div>
            )
        }

export default Registration