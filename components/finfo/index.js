import React from "react";
import './style.css';
import { io } from "socket.io-client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
const socket = io("http://localhost:3110");  

export default function FoodInfo ({ name }) {
    const [foodStatus, setFoodStatus] = useState(0); // "waiting", "ready", "over"
    
        useEffect(() => {
            // Listen for "foodReady" event
            socket.on("foodReady", () => {
                console.log("Food is ready!");
                setFoodStatus(1);
                console.log(foodStatus);
                
            });
    
            // Listen for "foodOver" event
            socket.on("foodOver", () => {
                console.log("Food is over!");
                setFoodStatus(0);
                console.log(foodStatus);
            });
    
            return () => {
                socket.off("foodReady");
                socket.off("foodOver");
            };
        }, []);
return(
    <div>

    <div className="finfo-cont">
    {foodStatus==0 ? 
    <div className="indicator nready"></div>
    :
    <div className="indicator ready"></div>
    }
    <p className="m-0">{name}</p>
    </div>
    </div>
);
};