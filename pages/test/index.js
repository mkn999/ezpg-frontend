import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3110");  // Backend URL

export default function StudentPage() {
    const [foodStatus, setFoodStatus] = useState("waiting"); // "waiting", "ready", "over"

    useEffect(() => {
        // Listen for "foodReady" event
        socket.on("foodReady", () => {
            console.log("Food is ready!");
            setFoodStatus("ready");
        });

        // Listen for "foodOver" event
        socket.on("foodOver", () => {
            console.log("Food is over!");
            setFoodStatus("over");
        });

        return () => {
            socket.off("foodReady");
            socket.off("foodOver");
        };
    }, []);

    return (
        <div>
            <h1>Student Dashboard</h1>
            {foodStatus === "ready" && <p style={{ color: "green" }}>🍽️ Food is ready! Go grab your meal.</p>}
            {foodStatus === "over" && <p style={{ color: "red" }}>❌ Food is over.</p>}
            {foodStatus === "waiting" && <p>⌛ Waiting for food...</p>}
        </div>
    );
}
