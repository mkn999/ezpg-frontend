import { useEffect, useState } from "react";
import './style.css';
export default function FoodMenu() {
  const [menu, setMenu] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const today = new Date().toLocaleString("en-US", { weekday: "long" });

        const res = await fetch("http://localhost:3110/get-menu", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ day: today }),
        });

        const data = await res.json();
        if (res.ok) {
          setMenu(data.menu);
        } else {
          setError(data.message || "Failed to fetch menu");
        }
      } catch (err) {
        setError("Error fetching menu");
      }
    };

    fetchMenu();
  }, []);

  return (
    <div>
      <h2 className="menu-title">Today's Menu</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {menu.map((item, index) => (
  <div key={index} className="food-menu">
    <p className="food-title">{item.meal_type}:</p>{item.food_items}
  </div>
))}
    </div>
  );
}
