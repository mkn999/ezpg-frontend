"use client";
import { useState, useEffect } from "react";
import { auth } from "@/lib/firebaseConfig";
import { signOut } from "firebase/auth";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (auth.currentUser) {
        setUser(auth.currentUser);

        // Fetch user details from backend
        const res = await fetch(`http://localhost:3110/user/${auth.currentUser.uid}`);
        const data = await res.json();
        setProfile(data);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div>
      {user ? (
        <>
          <h1>Welcome, {user.displayName}</h1>
          <p>Email: {user.email}</p>
          {profile ? (
            <>
              <p>Room Number: {profile.room_number}</p>
            </>
          ) : (
            <p>Loading profile...</p>
          )}
          <button onClick={() => signOut(auth)}>Logout</button>
        </>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  );
}
