import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [formData, setForm] = useState({ name: "", phonenumber: "", room: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
     e.preventDefault();
     console.log(formData);
     try {
       const response = await axios.post("http://192.168.0.143:3110/register", formData, {
         headers: {
           "Content-Type": "application/json"
         },
         body: JSON.stringify(formData),
       });
       console.log(response.data);
       alert("Form submitted successfully!");
       setForm({ name: "", phonenumber: "", roomnumber: "", password: "" });
     } catch (error) {
       console.error("Error submitting form:", error);
       alert("Failed to submit form.");
     }
    // 
    
  };

  return (
    <div className="container register">
      <form onSubmit={handleSubmit}>
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
          name="phonenumber"
          value={formData.phonenumber}
          onChange={handleChange}
          placeholder="Phone"
          required
        />
        <input
          type="text"
          name="room"
          value={formData.roomnumber}
          onChange={handleChange}
          placeholder="Room"
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
