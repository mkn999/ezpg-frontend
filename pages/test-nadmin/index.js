import { useState } from "react";
import QRScanner from "../../components/qr-scanner";
import "./style.css";
import Navbar from "../../components/navbar";
export default function Nadmin() {
  const [isOn, setIsOn] = useState(false);

  // Function to notify backend
  const updateFoodStatus = async (status) => {
    try {
      const endpoint = status ? "food-ready" : "food-over";
      const response = await fetch(`http://192.168.248.105:3110/${endpoint}`, {
        method: "POST",
      });
      const data = await response.text();
      console.log(data);
    } catch (error) {
      console.error("Error updating food status:", error);
    }
  };

  // Handle toggle switch
  const handleToggle = (event) => {
    const checked = event.target.checked;
    setIsOn(checked);

    // Call the appropriate API
    updateFoodStatus(checked);
  };

  return (
    <div>
      <Navbar />
      <div className="contianery">
      {/* <p>Turn on Alarm</p>
      <label className="switch">
        <input type="checkbox" checked={isOn} onChange={handleToggle} />
        <span className="slider round"></span>
      </label> */}
      <QRScanner />
      </div>
    </div>
  );
}


// export default function CookPage() {
//     const handleFoodReady = async () => {
//       try {
//         const response = await fetch("http://localhost:3110/food-ready", {
//           method: "POST",
//         });
//         const data = await response.text();
//         console.log(data);
//       } catch (error) {
//         console.error("Error notifying food ready:", error);
//       }
//     };
  
//     return (
//       <div>
//         <h1>Cook Dashboard</h1>
//         <button onClick={handleFoodReady}>Mark Food as Ready</button>
//       </div>
//     );
//   }
  