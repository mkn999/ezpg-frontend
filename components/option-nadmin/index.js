import './style.css';
import QRScanner from "../../components/qr-scanner";
import FoodStatus from '../food-status';
import { use, useState } from 'react';
import { QrCode, Radio,ScanQrCode  } from "lucide-react"; // Import icons
import { motion, AnimatePresence } from "framer-motion";
import Navbar from '../navbar';


export default function OptionNadmin(){
    const [isA,SetIsA] =useState("second");

    return(
        <div>
        <Navbar />
        <div className='button-area'>
        <button onClick={()=> SetIsA("first")} className={isA==="first" ? "checked":"unchecked"}><ScanQrCode /></button>
        <button onClick={()=> SetIsA("second")} className={isA==="second" ? "checked":"unchecked"}><Radio /></button>
        </div>
    <div className="contianery">
    <AnimatePresence mode="wait">
    {(() => {
      switch (isA) {
        case "first":
          return (
            <motion.div
              key="first"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
            >
            <QRScanner />
            </motion.div>
          );
        case "second":
          return (
            <motion.div
              key="second"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
            <FoodStatus />
          
            </motion.div>
          );
        default:
          return null;
      }
    })()}
  </AnimatePresence>
      </div>
        </div>
    );
}