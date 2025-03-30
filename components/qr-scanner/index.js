"use client";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";
import './style.css';
const QRScanner = () => {
    const [scanResult, setScanResult] = useState(null);
    const [responseMessage, setResponseMessage] = useState(null); // Stores backend response
    const [error, setError] = useState("");

    const handleFoodLog = async (e) => {
        e.preventDefault();
        setError(""); // Clear previous errors
      
        const res = await fetch("http://localhost:3110/log-food", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ scanResult }),
        });
      
        const data = await res.json();
      
        if (res.ok) {
            setResponseMessage("Food logged successfully!");
        } else {
          setError(data.message);
        }
      };
      

    useEffect(() => {
        const scanner = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: 500 });

        scanner.render(
            (decodedText) => {
                setScanResult(decodedText);
                scanner.clear();
                sendScanData(decodedText); // Send data to backend
            },
            (error) => console.log(error)
        );

        return () => scanner.clear();
    }, []);
    return (
        <div className="con-qr">
            <h2 className="log-text">Log Food</h2>
            {scanResult ? (
                <div className="">
                </div>
            ) : (
                <div id="qr-reader" className=""></div>
            )}
            <form>
                <input className='input' value={scanResult} disabled required></input>
            </form>
            <button onClick={handleFoodLog} className="log-food-button">Log</button>
            {responseMessage && (
                <div>
                    <p className="logged-food">{responseMessage}</p>
                </div>
            )}
        </div>
    );
};

export default QRScanner;
