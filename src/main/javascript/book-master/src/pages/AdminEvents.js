import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const AdminEvents = (props) => {
  const eventsToDisplay = props.events


  const [events, setEvents] = useState(eventsToDisplay);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {setEvents(eventsToDisplay)}, [eventsToDisplay]);

  const handleChange = event => {
    setName(event.target.value )
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    filterEventsByName(name);
    setName([])
  };


  const filterEventsByName = (searchName) => {
    const searchEvents = events.filter((item) =>
      item.name.toLowerCase().includes(searchName.toLowerCase())
    );
    setEvents(searchEvents);
  };

  const displayed = events.map((event) => (
    <tr key={event.id}>
      <td>
        <Link to={`/admin_home/events/${event.id}`}>{event.name}</Link>
      </td>
      <td>{event.details}</td>
      <td>{event.date}</td>
    </tr>
  ));

  console.log(displayed);

  return (
    <>
      <br />
      <div>
        <form onSubmit={handleSubmit} className="row g-2 align-items-center">
          <div className="col-auto">
            <input
              type="text"
              id="name"
              value={name}
              name="name"
              className="form-control"
              placeholder="Event's name"
              onChange={handleChange}
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary">
              Search Event
            </button>
          </div>
          <div className="col-auto">
            <Link to="/event_form">
                <button className="btn btn-success">Add Event</button>
            </Link>
          </div>
        </form>
      </div>
      <div>
        <br />
        <h2>Events Available:</h2>
        <br />
        {displayed.length === 0 ? (
          <h2>No events to show</h2>
        ) : (
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Details</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>{displayed}</tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default AdminEvents;
