const UserRegistration = () => {
    return  <div className='container mt-5'>
        <h3>Registration Form</h3>
            <form className='row g-3'>
                <div className='col-md-6'>
                    <label htmlFor='fname' className='form-label'>First Name:</label>
                    <input type='text' className='form-control' id='fname' required/>
                </div>
                <div className='col-md-6'>
                    <label htmlFor="lname" className='form-label'>Last Name:</label>
                    <input type='text' className='form-control' id='lname' required/>
                </div>
                <div className='col-md-8'>
                    <label htmlFor="email" className='form-label'>Email:</label>
                    <input type='email' className='form-control' id='email' required/>
                </div>
                <div className='col-md-4'>
                    <label htmlFor="pnumber" className='form-label'>Phone number:</label>
                    <input type='text' className='form-control' id='pnumber'/>
                </div>
                <div className='col-md-12'>
                    <label htmlFor="address" className='form-label'>Address:</label>
                    <input type='text' className='form-control' id='address' required/>
                </div>
                <div className='col-md-6'>
                    <label htmlFor="password" className='form-label'>Password:</label>
                    <input type='password' className='form-control' id='password' required/>
                </div>
                <div className='col-md-6'>
                    <label htmlFor="verify" className='form-label'>Verify Password:</label>
                    <input type='password' className='form-control' id='verify' required/>
                </div>
                <div>
                    <button type='submit' className="btn btn-success">Submit</button>
                </div>
                                
            </form> 
    </div>;
};

export default UserRegistration;