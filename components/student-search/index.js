import './style.css';
import { useState } from 'react';

export default function StudentSearch() {
  const [username, setUsername] = useState("");
  const [roomnumber, setRoomNumber] = useState("");
  const [userData, setUserData] = useState([]); // Initialize as an empty array
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setUserData([]); // Reset previous user data

    try {
      const res = await fetch("http://localhost:3110/user-search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, roomnumber }),
      });

      const data = await res.json();
      console.log("Fetched Data:", data); // Debugging log

      if (res.ok) {
        // ✅ If the backend sends multiple users, ensure data.user is an array
        setUserData(Array.isArray(data.user) ? data.user : [data.user]);
      } else {
        setError(data.message || "User not found");
      }
    } catch (err) {
      setError("Failed to fetch user");
    }
  };

  return (
    <div className='search'>
      <p className='search-title'>Search User</p>
      <p style={{ color: "red" }}>does not show multipler users</p>
      <form className='search-form'>
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          onChange={(e) => setUsername(e.target.value)}
          className='input'
          required
        />
        <input
          type="text"
          name="roomnumber"
          placeholder="Enter room number"
          onChange={(e) => setRoomNumber(e.target.value)}
          className='input'
          required
        />
      </form>
      <button onClick={handleSearch} className='search-button'>Search</button>

      {/* Display User Info */}
      {userData.length > 0 && (
        <div className="profile-cont">
          {userData.map((user, index) => (
            <div key={index}>
              <p>Name: <span className='user-result'>{user.name || "N/A"}</span></p>
              <p>Room Number: <span className='user-result'>{user.room_number || "N/A"}</span> </p>
              <p>Room Number: <span className='user-result'>{user.phone_number || "N/A"}</span></p>
            </div>
          ))}
        </div>
      )}

      {/* Display Error Message */}
      {error && <p style={{ color: "red" }}>{error}</p>}    
    </div>
  );
}
