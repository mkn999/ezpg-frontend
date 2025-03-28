import './style.css';
import StudentContent from "../student-content";
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Home,  Ticket } from "lucide-react"; // Import icons
import TicketSystem from '../ticket-system';

export default function OptionSelect(){
    const [activeComponent, setActiveComponent] = useState("first");

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Navbar */}
      <div className="flex">
        <button 
          className={`p-2 option-select ${activeComponent === "first" ? "bg-blue-500 text-white" : "bg-gray-300"}`} 
          onClick={() => setActiveComponent("first")}
        >
        <Home size={24} />
        </button>
        <button 
          className={`p-2  option-select ${activeComponent === "second" ? "bg-green-500 text-white" : "bg-gray-300"}`} 
          onClick={() => setActiveComponent("second")}
        >
        <Ticket size={24} />
        </button>
      </div>

      {/* Animated Component Switching */}
      <div className="relative w-full max-w-md h-32 overflow-hidden">
        <AnimatePresence mode="wait">
          {activeComponent === "first" ? (
            <motion.div
              key="first"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
            >
              <StudentContent/>
            </motion.div>
          ) : (
            <motion.div
              key="second"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <TicketSystem/>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
    );
}