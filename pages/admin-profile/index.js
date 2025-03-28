import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProNav from "../../components/pro-nav";
import Loader from "../../components/loader";
import MaleInfo from "../../components/male-info";
import FemaleInfo from "../../components/female-info";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const router = useRouter();
  const [isComponentA, setIsComponentA] = useState(true);

  const { username, password } = router.query; // Get data from URL

  useEffect(() => {
    console.log("Profile useEffect triggered"); // 🔍 Debugging log
  
    if (!username || !password) {
      console.log("No username or password. Redirecting to login...");
      router.push("/admin-login");
      return;
    }
  
    console.log("Sending request to backend with:", username, password);
  
    fetch("http://localhost:3110/admin-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Received from backend:", data);
  
        if (!data.user) {
          setError("Unauthorized");
          router.push("/admin-login");
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
      <div className='containeri'>
            <p className='title-mf'>{isComponentA ? "Male List" : "Female List"}</p>
            {isComponentA ? <MaleInfo /> : <FemaleInfo />}
            </div>
      <div className='containery'>
        <button onClick={() => setIsComponentA(true)} disabled={isComponentA} className='btn-ad'>
          Back
        </button>
        <button onClick={() => setIsComponentA(false)} disabled={!isComponentA} className='btn-ad'>
          Next
        </button>
        </div>
      <button onClick={() => router.push("/login")}>Logout</button>
    </div>
  );
}
