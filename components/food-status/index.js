import './style.css'
import { useState } from 'react';
export default function FoodStatus(){
      const [isOn, setIsOn] = useState(false);
    
      // Function to notify backend
      const updateFoodStatus = async (status) => {
        try {
          const endpoint = status ? "food-ready" : "food-over";
          const response = await fetch(`http://localhost:3110/${endpoint}`, {
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
    return(
        <div className='switch-cont'>
      <p>Turn on Alarm</p>
      <label className="switch">
        <input type="checkbox" checked={isOn} onChange={handleToggle} />
        <span className="slider round"></span>
      </label> 
        </div>
    );
}