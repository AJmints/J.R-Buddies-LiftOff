import { Link, useNavigate, useParams } from "react-router-dom";

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
            <button onClick={removeEvent} className="btn btn-danger">
                Delete Event
            </button>
        </div>
    );
};

export default EventInfo;
