import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const EventInfo = (props) => {
    const { id } = useParams();
    const events = props.events;
    const event = events.find((p) => p.id === parseInt(id));
    const navigate = useNavigate();

    const removeEvent = () => {
        props.deleteEvent(event.id);
        navigate("/admin_home/events");
    };

    


    return (
        <div className="form-group row" key={event.id}>
            <Link to={`/admin_home/events/edit/${event.id}`} state={{ event }}>
                <button className="btn btn-primary">Edit Information</button>
            </Link>
            {/* Displaying event information */}
            <div className="form-group-row">
                <label className="col-sm-2 col-form-label">Event: </label>
                <label className="col-sm-2 col-form-label"> {event.name}</label>
            </div>
            <div className="form-group-row">
                <label className="col-sm-2 col-form-label">Details: </label>
                <label className="col-sm-2 col-form-label"> {event.details}</label>
            </div>
            <div className="form-group-row">
                <label className="col-sm-2 col-form-label">Date: </label>
                <label className="col-sm-2 col-form-label"> {event.date}</label>
            </div>
            <button onClick={removeEvent} className="btn btn-danger">
                Delete Event
            </button>
        </div>
    );
};

export default EventInfo;
