import React , {useState} from "react";
import axios from "axios";


const UserRegistration = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    //const [verifyPassword, setVerifyPassword] = useState("");

    const handleInputChange = (e, setStateFunction) => {
        setStateFunction(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form Submitted");

        try{
            const response = await axios.post("http://localhost:8080/api/user/register", {
                firstName,
                lastName,
                email,
                phoneNumber,
                address,
                password,
                //verifyPassword,
            });

            if (response.status === 200) {

            } else {

            }
        } catch (error) {
            console.error("Error during registration:", error);
        }
    };

    return  <div className='container mt-5'>
        <h3>Registration Form</h3>
            <form className='row g-3' onSubmit={handleSubmit}>
                <div className='col-md-6'>
                    <label htmlFor='fname' className='form-label'>First Name:</label>
                    <input type='text' className='form-control' id='fname' required 
                    value={firstName} onChange={(e) => handleInputChange(e, setFirstName)}/>
                </div>
                <div className='col-md-6'>
                    <label htmlFor="lname" className='form-label'>Last Name:</label>
                    <input type='text' className='form-control' id='lname' required
                    value={lastName} onChange={(e) => handleInputChange(e, setLastName)}/>
                </div>
                <div className='col-md-8'>
                    <label htmlFor="email" className='form-label'>Email:</label>
                    <input type='email' className='form-control' id='email' required
                    value={email} onChange={(e) => handleInputChange(e, setEmail)}/>
                </div>
                <div className='col-md-4'>
                    <label htmlFor="pnumber" className='form-label'>Phone number:</label>
                    <input type='text' className='form-control' id='pnumber'
                    value={phoneNumber} onChange={(e) => handleInputChange(e, setPhoneNumber)}/>
                </div>
                <div className='col-md-12'>
                    <label htmlFor="address" className='form-label'>Address:</label>
                    <input type='text' className='form-control' id='address' required
                    value={address} onChange={(e) => handleInputChange(e, setAddress)}/>
                </div>
                <div className='col-md-6'>
                    <label htmlFor="password" className='form-label'>Password:</label>
                    <input type='password' className='form-control' id='password' required 
                    value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                {/* <div className='col-md-6'>
                    <label htmlFor="verify" className='form-label'>Verify Password:</label>
                    <input type='password' className='form-control' id='verify' required 
                    value={verifyPassword} onChange={(e) => setVerifyPassword(e.target.value)}/>
                </div> */}
                <div>
                    <button type='submit' className="btn btn-success">Submit</button>
                </div>
                                
            </form> 
    </div>;
};

export default UserRegistration;