import { useState } from "react";
import axios from "axios";
import "../egister/style.css";

// const router = useRouter(); // Initialize router

export default function Register ({ switchToLogin }) {
  const [formData, setForm] = useState({ username:"",name: "", phone_number: "", room: "", gender:"", password: "" });

  const handleChange = (e) => {
    setForm({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    try {
      const response = await axios.post("http://localhost:3110/register", formData, {
        headers: {
          "Content-Type": "application/json"
        },
      });
      console.log(response.data);
      console.log("loggedf");
  
      // Reset form after successful submission
      setForm({ username:"", name: "", phone_number: "", room: "", gender:"", password: "" });
  
      alert("User registered successfully!"); // you might want to change this depending on actual server response
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form.");
    }
  };
  

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
      <p className="sign-in">Sign-Up</p>
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
          <button onClick={switchToLogin} className="text-blue-500 underline">
            Register
          </button>
        </div>
      </form>
      <div className="d-white">
        <img src="/images/silver.svg" alt="Logo" width={500} height={600}></img>
      </div>
    </div>
  );
}
