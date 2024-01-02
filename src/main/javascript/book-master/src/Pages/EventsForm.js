import React, {useState} from "react";
import axios from "axios";

const EventsForm = () => {

    const [name, setName] = useState("");
    const [details, setDetails] = useState("");
    const [date, setDate] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleInputChange = (e, setStateFunction) => {
        setStateFunction(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form Submitted");

        try{
            const response = await axios.post("http://localhost:8080/event/save", {
                name,
                details,
                date,
            });

            if (response.status === 200) {
                setFormSubmitted(true);

            } else {
                console.error("Error saving event:", response.data.error);

            }
        } catch (error) {
            console.error("Error saving event", error);
        }
    };

    if (formSubmitted) {
        return (
            <div className="container mt-5">
                <h3>Your event has been added!</h3>
            </div>
        )
    }
    

    return (
        <div className='container mt-5'>
            <h3>Create Event</h3>
            <form className="row g-3" onSubmit={handleSubmit}>
            <div className='col-md-12'>
                <label htmlFor="name">Event Name</label>
                <input type="text" className="form-control" id="name"
                value={name} onChange={(e) => handleInputChange(e, setName)}/>
            </div>
            <div className='col-md-12'>
                <label htmlFor="details">Details</label>
                <input type="text" className="form-control" id="details"
                value={details} onChange={(e) => handleInputChange(e, setDetails)}/>
            </div>
            <div className='col-md-12'>
                <label htmlFor="date">Date</label>
                <input type="date" className="form-control" id="date"
                value={date} onChange={(e) => handleInputChange(e, setDate)}/>
            </div>
            <div>
                <button type='submit' className="btn btn-success">Submit</button>
            </div>
            </form>
        </div>
    )
}

export default EventsForm;