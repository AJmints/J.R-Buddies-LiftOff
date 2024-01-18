import React, { useState, useEffect } from 'react';

const DisplayEvents = () => {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    // Fetch data from your Spring Boot backend
    fetch('http://localhost:8080/event/all') // Update the URL with your actual backend URL
      .then(response => response.json())
      .then(data => setEvent(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  return (
    <div>
      <h2>Upcoming Events</h2>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Details</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
        {event.map(event => (
            <tr key={event.id}>
              <th scope="col">{event.name}</th>
              <th scope="col">{event.details}</th>
              <th scope="col">{event.date.slice(5,10)}-{event.date.slice(0,4)}</th>
            </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayEvents;
