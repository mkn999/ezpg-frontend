import './style.css';
import { useState } from 'react';

export default function UserDelete() {
  const [username, setUsername] = useState("");
  const [roomnumber, setRoomNumber] = useState("");
  const [userData, setUserData] = useState([]); // Store multiple users
  const [error, setError] = useState("");

  const handledDelete = async (e) => {
    e.preventDefault();
    setError("");
    setUserData([]);

    try {
      const res = await fetch("http://localhost:3110/user-delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, roomnumber }),
      });

      const data = await res.json();
      console.log("Fetched Data:", data); // Debugging log

      if (res.ok && data.users?.length > 0) {
        setUserData(data.users); // ✅ Store array of users
      } else {
        setError(data.message || "User not found");
      }
    } catch (err) {
      setError("Failed to fetch user");
    }
  };

  const handleDelete = async (userId) => {
    try {
      const res = await fetch(`http://localhost:3110/delete-user/${userId}`, {
        method: "DELETE",
      });

      const data = await res.json();
      if (res.ok) {
        setUserData(userData.filter((user) => user.id !== userId)); // ✅ Remove deleted user
      } else {
        setError(data.message || "Failed to delete user");
      }
    } catch (err) {
      setError("Error deleting user");
    }
  };

  return (
    <div className='search'>
      <p className='search-title'>Delete User</p>
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
      <button onClick={handledDelete} className='search-button'>Search</button>

      {/* Display Error Message */}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
