import { useState, useEffect } from "react";
import './style.css';

export default function FetchTickets({disabled}) {
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState("");
  const [activeComponent, setActiveComponent] = useState("first");

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const res = await fetch("http://localhost:3110/get-tickets");
      const data = await res.json();

      if (res.ok) {
        setTickets(data.tickets);
      } else {
        setError(data.message || "Failed to fetch tickets");
      }
    } catch (error) {
      setError("Error fetching tickets");
      console.error("Error:", error); // Log the error
    }
  };

  // Handle deleting a ticket
  const handleDelete = async (ticketId) => {
    console.log("Deleting ticket with ID:", ticketId); // Log ticketId to check if it's correct
    try {
      const res = await fetch(`http://localhost:3110/get-tickets/${ticketId}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (res.ok) {
        // Remove the deleted ticket from the state
        setTickets((prevTickets) => prevTickets.filter((ticket) => ticket.id !== ticketId));
      } else {
        setError(data.message || "Failed to delete ticket");
        console.error("Error:", data); // Log the error message
      }
    } catch (error) {
      setError("Error deleting ticket");
      console.error("Error:", error); // Log the error
    }
  };

  return (
    <div className="n">
      <h1 className="non">Ticket List</h1>
      <div  className="ticket-cont">
      {error && <p style={{ color: "red" }}>{error}</p>}
    
          {tickets.map((ticket) => (
            <div key={ticket.id} className="ticket-div">
            <p className="text-danger main-p">{ticket.title}</p>
              <p>{ticket.id}</p>
              <p>{ticket.description}</p>
              <p>{ticket.status}</p>
              <button 
              onClick={() => {
                handleDelete(ticket.id); 
              }} className={disabled} >Delete</button>
            </div>
          ))}
          </div>
    </div>
  );
}
