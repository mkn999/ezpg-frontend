import { useState } from "react";
import axios from "axios";
import "../egister/style.css";

export default function Register ({ switchToLogin }) {
  const [formData, setForm] = useState({ username:"",name: "", phone_number: "", room: "", gender:"", password: "" });

  const handleChange = (e) => {
    setForm({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
     e.preventDefault();
     console.log(formData);
     try {
       const response = await axios.post("http://localhost:3110/register", formData, {
         headers: {
           "Content-Type": "application/json"
         },
       });
       console.log(response.data);
       alert("Form submitted successfully!");
       setForm({ username:"",phone_number: "",name: "",room: "", gender:"" ,password: "" });
     } catch (error) {
       console.error("Error submitting form:", error);
       alert("Failed to submit form.");
     }
  };

  return (
    <div className="container register">
      <p className="sign-in">Register</p>
      <form onSubmit={handleSubmit}>
      <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          required
        />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="text"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
          placeholder="Phone"
          required
        />
        <input
          type="text"
          name="room"
          value={formData.room}
          onChange={handleChange}
          placeholder="Room"
          required
        />
        <input
          type="text"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          placeholder="Gender"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
  
        <div className="dont">
          <button type="submit">Register</button>
          <button onClick={switchToLogin} className="text-blue-500 underline">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
