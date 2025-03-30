import "./style.css";
import { useState } from "react";

export default function TicketSystem({username , room}) {
  const [formData, setFormData] = useState({
    user_id: "",
    user_room:"",
    title: "",
    description: "",
    priority: "Low",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch("http://localhost:3110/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("Ticket submitted successfully!");
        setFormData({ user_id: "", title: "", description: "", priority: "Low" });
      } else {
        setMessage(data.error || "Failed to submit ticket.");
      }
    } catch (error) {
      setMessage("Error submitting ticket.");
    }
  };

  return (
    <div className="ticket-display">
      <h2>Create a Support Ticket</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="user_id"
          placeholder="User ID"
         value={formData.user_id}
          onChange={handleChange}
        />
          <input
          type="text"
          name="user_room"
          placeholder="Room"
          value={formData.user_room}
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <select name="priority" value={formData.priority} onChange={handleChange}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
          <option value="Urgent">Urgent</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
