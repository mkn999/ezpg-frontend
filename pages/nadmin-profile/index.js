import { useState, useEffect } from "react";
import { useRouter } from "next/router"; 
import OptionNadmin from "../../components/option-nadmin";

export default function Nadmin() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const router = useRouter();
  const [isComponentA, setIsComponentA] = useState(true);

  useEffect(() => {
    if (!router.isReady) return; // ✅ Wait for router to be ready

    const { username, password } = router.query; // ✅ Get query parameters

    if (!username || !password) {
      console.log("No name or password. Redirecting to login...");
      router.push("/nadmin-login");
      return;
    }

    console.log("Sending request to backend with:", username, password);

    fetch("http://localhost:3110/nadmin-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Received from backend:", data);

        if (!data.user) {
          setError("Unauthorized");
          router.push("/nadmin-login");
        } else {
          setUser(data.user);
        }
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("Error fetching profile");
      });
  }, [router.isReady, router.query]); // ✅ Use router.isReady to ensure query params are available

  if (error) return <p>{error}</p>;
  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <OptionNadmin />
    </div>
  );
}
