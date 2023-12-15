const LoginAndRegister = () => {
    return  <div className='container mt-5'>
    <h3>Registration Form</h3>
    <form className='row g-3'>
        <div className='col-md-6'>
            <label for='fname' className='form-label'>First Name:</label>
            <input type='text' className='form-control' id='fname' required/>
        </div>
        <div className='col-md-6'>
            <label for="lname" className='form-label'>Last Name:</label>
            <input type='text' className='form-control' id='lname' required/>
        </div>
        <div className='col-md-8'>
            <label for="email" className='form-label'>Email:</label>
            <input type='email' className='form-control' id='email' required/>
        </div>
        <div className='col-md-4'>
            <label for="pnumber" className='form-label'>Phone number:</label>
            <input type='text' className='form-control' id='pnumber'/>
        </div>
        <div className='col-md-12'>
            <label for="address" className='form-label'>Address:</label>
            <input type='text' className='form-control' id='address' required/>
        </div>
        <div className='col-md-6'>
            <label for="password" className='form-label'>Password:</label>
            <input type='password' className='form-control' id='password' required/>
        </div>
        <div className='col-md-6'>
            <label for="verify" className='form-label'>Verify Password:</label>
            <input type='password' className='form-control' id='verify' required/>
        </div>
        <div>
            <button type='submit' className="btn btn-success">Submit</button>
        </div>
                        
    </form> 
</div>;
};

export default LoginAndRegister;