import React from "react";

const EventsForm = () => {
    return (
        <div className='container mt-5'>
            <h3>Create Event</h3>
            <form className="row g-3">
            <div className='col-md-12'>
                <label htmlFor="name">Event Name</label>
                <input type="text" className="form-control" id="name"/>
            </div>
            <div className='col-md-12'>
                <label htmlFor="details">Details</label>
                <input type="text" className="form-control" id="details"/>
            </div>
            <div className='col-md-12'>
                <label htmlFor="date">Date</label>
                <input type="text" className="form-control" id="date"/>
            </div>
            </form>
        </div>
    )
}

export default EventsForm;