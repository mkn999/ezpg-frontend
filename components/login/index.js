import { useState } from "react";
import { useRouter } from "next/router";
import './style.css';

export default function MainLogin({link,profile}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch(link, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (res.ok) {
      // ✅ Redirect to profile automatically
      router.push({
        pathname: profile,
        query: { username, password }, // Pass credentials in URL
      });
    } else {
      setError(data.message);
    }
  };

  return (
    <div className="main-conti">
      <div className="second-cont">
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleLogin} className="form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="button">Login</button>
      </form>
      </div>
    </div>
  );
}
