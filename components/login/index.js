import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../login/style.css";
import axios from "axios";

export default function Login({ switchToRegister }){


    const [formData,setForm] = useState({username: "",password: "" })
    const handleChange = (e) => {
        setForm({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = /*(e) => {
        e.preventDefault();
        console.log("Form Submitted:", form);
        alert("Registered successfully!");
        setForm({ name: "", room:"",password: "" });
      }; */
      async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post("http://192.168.0.143:3110/login", formData, {
            headers: {
                "Content-Type": "application/json"
            }
        });
            console.log(response.data);
            alert("Form submitted successfully!");
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to submit form.");
        }
    };

    return(
       <div className="container register">
        <p class="sign-in">Sign In</p>
       <form onSubmit={handleSubmit}>
            {/* <input type="text" name="username" placeholder="phonenumber" onChange={handleChange} required />
            <input type="password" name="password" placeholder="password" onChange={handleChange} required /> */}
            <div className="dont">
            <button type="submit">Sign In with Google</button>
            {/* <button onClick={switchToRegister} className="text-blue-500 underline">
            Register
          </button> */}
          </div>
        </form>
    </div>
    );
}