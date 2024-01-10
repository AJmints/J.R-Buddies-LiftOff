import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

const EventInfo = (props) => {
    const { id } = useParams();
    const events = props.events;
    const event = events.find((p) => p.id === parseInt(id));
    const navigate = useNavigate();

    const removeEvent = () => {
        props.deleteEvent(book.id);
        navigate("/admin_home/events");
    };

    return (
        <div className="form-group row" key={event.id}>
            <Link to={`/admin_home/events/edit/${event.id}`} state={{ event }}>
                <button className="btn btn-primary">Edit Information</button>
            </Link>
            {/* Displaying event information */}
            <button onClick={removeEvent} className="btn btn-danger">
                Delete Event
            </button>
        </div>
    );
};

export default EventInfo;
