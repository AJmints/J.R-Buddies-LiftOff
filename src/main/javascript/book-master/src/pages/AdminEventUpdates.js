import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const EventUpdates = (props) => {
    const location = useLocation();
    const { event } = location.state;
    const navigate = useNavigate();

    const [editForm, setEditForm] = useState(event);

    const handleChange = (event) => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.updateEvent(editForm, event.id);
        navigate("/admin_home/events");
    };

    return (
        <div className="event">
            <form onSubmit={handleSubmit}>
                <br></br>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Event Name: </label>
                    <div className="col-sm-10 w-50">
                        <input
                            type="text"
                            value={editForm.name}
                            name="name"
                            placeholder="event name"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form label">Event Detail: </label>
                    <div className="col-sm-10 w-50">
                        <input
                            type="text"
                            value={editForm.details}
                            name="details"
                            placeholder="event details"
                            onChange={handleChange}
                            />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form label">Event Date: </label>
                    <div className="col-sm-10 w-50">
                        <input
                            type="text"
                            value={editForm.date}
                            name="date"
                            placeholder="event date"
                            onChange={handleChange}
                            />
                    </div>
                </div>
                <input type="submit" className="btn btn-primary" value="Update event" />
            </form>
        </div>
    );
};

export default EventUpdates;
