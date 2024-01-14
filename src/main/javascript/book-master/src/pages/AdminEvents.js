import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const AdminEvents = (props) => {
  const [events, setEvents] = useState([]);
  const [name, setName] = useState("");
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/event/all");
      setEvents(response.data);
      setAllEvents(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    filterEventsByName(name);
  };

  const filterEventsByName = (searchName) => {
    const searchEvents = allEvents.filter((item) =>
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
      <td>{event.date.slice(5,10)}-{event.date.slice(0,4)}</td>
    </tr>
  ));

  return (<div className="container mt-5">
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
    </div>
  );
};

export default AdminEvents;
