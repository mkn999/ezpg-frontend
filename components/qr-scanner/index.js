"use client";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";

const QRScanner = () => {
    const [scanResult, setScanResult] = useState(null);

    useEffect(() => {
        const scanner = new Html5QrcodeScanner(
            "qr-reader", 
            { fps: 10, qrbox: 250 }
        );

        scanner.render(
            (decodedText) => {
                setScanResult(decodedText);
                scanner.clear();
            },
            (error) => console.log(error)
        );

        return () => scanner.clear();
    }, []);

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
        </div>
    );
};

export default QRScanner;
