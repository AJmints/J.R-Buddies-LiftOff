import React , {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const UserRegistration = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("");
    const [passwordMismatch, setPasswordMismatch] = useState(false);
    const [missingFields, setMissingFields] = useState([]);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const role = "USER"


    const handleInputChange = (e, setStateFunction) => {
        setStateFunction(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form Submitted");

        const missingFieldsArray = [];
        if (!firstName) missingFieldsArray.push('First Name');
        if (!lastName) missingFieldsArray.push("Last Name");
        if (!email) missingFieldsArray.push("Email");
        if (!address) missingFieldsArray.push("Address");
        if (!password) missingFieldsArray.push("Password");
        if (!verifyPassword) missingFieldsArray.push("Verify Password");

        setMissingFields(missingFieldsArray);

        if (password !== verifyPassword) {
            setPasswordMismatch(true);
            return;
        }

        try{
            const response = await axios.post("http://localhost:8080/api/user/register", {
                firstName,
                lastName,
                email,
                phone,
                address,
                password,
                role,
            });

            if (response.status === 200) {
                const token = response.data.token;
                document.cookie = `jwtToken=${token}; path=/; secure; SameSite=Strict`;
                setFormSubmitted(true);

            } else {

            }
        } catch (error) {
            console.error("Error during registration:", error);
        }
    };

    if (formSubmitted) {
        return (
            <div className="containter mt-5">
                <h5>Thank you for registering!</h5>
                <Link to="/user_sign_in">Sign In</Link>
            </div>
        )
    }

    return  <div className='container mt-5'>
        <h3>Registration Form</h3>
            <form className='row g-3' onSubmit={handleSubmit}>
                <div className='col-md-6'>
                    <label htmlFor='firstName' className='form-label'>First Name:</label>
                    <input type='text' className='form-control' id='firstName' required 
                    value={firstName} onChange={(e) => handleInputChange(e, setFirstName)}/>
                </div>
                <div className='col-md-6'>
                    <label htmlFor="lastName" className='form-label'>Last Name:</label>
                    <input type='text' className='form-control' id='lastName' required
                    value={lastName} onChange={(e) => handleInputChange(e, setLastName)}/>
                </div>
                <div className='col-md-8'>
                    <label htmlFor="email" className='form-label'>Email:</label>
                    <input type='email' className='form-control' id='email' required
                    value={email} onChange={(e) => handleInputChange(e, setEmail)}/>
                </div>
                <div className='col-md-4'>
                    <label htmlFor="phone" className='form-label'>Phone number:</label>
                    <input type='text' className='form-control' id='phone'
                    value={phone} onChange={(e) => handleInputChange(e, setPhone)}/>
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
                <div className='col-md-6'>
                    <label htmlFor="verify" className='form-label'>Verify Password:</label>
                    <input type='password' className='form-control' id='verify' required 
                    value={verifyPassword} onChange={(e) => setVerifyPassword(e.target.value)}/>
                    {passwordMismatch && (
                        <p className="text-danger">Passwords do not match</p>
                    )}
                </div>
                <div>
                    <input type="hidden" name="role" value={role} />
                </div>

                {missingFields.length > 0 && (
                    <div className="col-12">
                        <p className="text-danger">
                            Please fill in the following fields: {missingFields.join(", ")}
                        </p>
                    </div>
                )}
                <div>
                    <button type='submit' className="btn btn-success">Submit</button>
                </div>
                                
            </form> 
    </div>;
};

export default UserRegistration;