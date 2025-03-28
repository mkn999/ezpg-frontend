import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProNav from "../../components/pro-nav";
import Loader from "../../components/loader";
import OptionSelect from "../../components/option-select";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const router = useRouter();
  const { username, password } = router.query; // Get data from URL

  useEffect(() => {
    console.log("Profile useEffect triggered"); // 🔍 Debugging log
  
    if (!username || !password) {
      console.log("No username or password. Redirecting to login...");
      router.push("/test-login");
      return;
    }
  
    console.log("Sending request to backend with:", username, password);
  
    fetch("http://localhost:3110/tesalogin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Received from backend:", data);
  
        if (!data.user) {
          setError("Unauthorized");
          router.push("/test-login");
        } else {
          setUser(data.user);
        }
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("Error fetching profile");
      });
  }, [username, password]);
  

  if (error) return <p>{error}</p>;
  if (!user) return <Loader />;

  return (
    <div>
      <ProNav user={user} />
      <OptionSelect />
      <button onClick={() => router.push("/login")}>Logout</button>
    </div>
  );
}
