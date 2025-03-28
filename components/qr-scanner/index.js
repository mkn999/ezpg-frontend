"use client";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";

const QRScanner = () => {
    const [scanResult, setScanResult] = useState(null);
    const [responseMessage, setResponseMessage] = useState(null); // Stores backend response

    useEffect(() => {
        const scanner = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: 250 });

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

    // Function to send scanned data to backend
    // const sendScanData = async (studentID) => {
    //     try {
    //         const response = await fetch("http://localhost:3110/log-meal", {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify({ studentID }), // Send scanned ID to backend
    //         });

    //         const data = await response.json();
    //         setResponseMessage(data.message); // Store the response message
    //     } catch (error) {
    //         console.error("Error:", error);
    //         setResponseMessage("Error connecting to server.");
    //     }
    // };

    return (
        <div className="p-4 text-center">
            <h2 className="text-xl font-bold mb-4">Log Food</h2>
            {scanResult ? (
                <div className="bg-green-200 p-2 rounded">
                    <p>Scanned Code: {scanResult}</p>
                </div>
            ) : (
                <div id="qr-reader" className="w-64 mx-auto"></div>
            )}

            {responseMessage && (
                <div className="mt-4 p-2 bg-gray-200 rounded">
                    <p>{responseMessage}</p>
                </div>
            )}
        </div>
    );
};

export default QRScanner;
