import './style.css';
import { useState } from 'react';

export default function StudentSearch() {
  const [username, setUsername] = useState("");
  const [roomnumber, setRoomNumber] = useState("");
  const [userData, setUserData] = useState([]); // Store multiple users
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");
    setUserData([]); // Reset user data before fetching

    try {
      const res = await fetch("http://localhost:3110/user-search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, roomnumber }),
      });

      const data = await res.json();
      console.log("Fetched Data:", data); // Debugging log

      if (res.ok) {
        setUserData(Array.isArray(data.users) ? data.users : []);
      } else {
        setError(data.message || "User not found");
      }
    } catch (err) {
      setError("Failed to fetch user");
    }
  };

  return (
    <div className="search">
      <p className="search-title">Search User</p>      
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          name="username"
          placeholder="Enter Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input"
          required
        />
        <input
          type="text"
          name="roomnumber"
          placeholder="Enter Room Number"
          value={roomnumber}
          onChange={(e) => setRoomNumber(e.target.value)}
          className="input"
          required
        />
      </form>
      <button onClick={handleSearch} className="search-button">Search</button>

      {/* Display User Info */}
      {userData.length > 0 && (
        <div className="profile-cont">
          {userData.map((user, index) => (
            <div key={index}>
              <p>Name: <span className="user-result">{user.name || "N/A"}</span></p>
              <p>Username: <span className="user-result">{user.username || "N/A"}</span></p>
              <p>Room Number: <span className="user-result">{user.room_number || "N/A"}</span></p>
              <p>Phone Number: <span className="user-result">{user.phone_number || "N/A"}</span></p>
              <p>Gender: <span className="user-result">{user.gender || "N/A"}</span></p>


              {/* Show Last Food Taken */}
              {user.last_food ? (
                <>
                  <p>Last Food: <span className="user-result">{user.last_food.food_name || "N/A"}</span></p>
                  <p>
                    Taken At:{" "}
                    <span className="user-result">
                      {new Date(user.last_food.taken_at).toLocaleTimeString()}{" "}
                      {new Date(user.last_food.taken_at).toLocaleDateString()}
                    </span>
                  </p>
                </>
              ) : (
                <p></p>
              )}
              <hr></hr>
            </div>
          ))}
        </div>
      )}

      {/* Display Error Message */}
      {error && <p style={{ color: "red" }}>{error}</p>}    
    </div>
  );
}
