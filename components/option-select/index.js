import './style.css';
import StudentContent from "../student-content";
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Home,  Ticket, Salad, Tickets } from "lucide-react"; // Import icons
import TicketSystem from '../ticket-system';
import FoodMenu from '../food-menu';
import FetchTickets from '../fetch-tickets';

export default function OptionSelect({username,user}){
    const [activeComponent, setActiveComponent] = useState("first");

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Navbar */}
      <div className="option-select ">
        <button 
          className={`p-2 option-select ${activeComponent === "first" ? "checked" : "unchecked"}`} 
          onClick={() => setActiveComponent("first")}
        >
        <Home size={24} />
        </button>
        <button 
          className={`p-2  option-select ${activeComponent === "second" ? "checked" : "unchecked"}`} 
          onClick={() => setActiveComponent("second")}
        >
        <Salad size={24}/>

        </button>
        <button 
          className={`p-2  option-select ${activeComponent === "third" ? "checked" : "unchecked"}`} 
          onClick={() => setActiveComponent("third")}
        >
        <Ticket size={24}  />
        </button>
        <button 
          className={`p-2  option-select ${activeComponent === "fourth" ? "checked" : "unchecked"}`} 
          onClick={() => setActiveComponent("fourth")}
        >
        <Tickets size={24}  />
        </button>
      </div>

      {/* Animated Component Switching */}
      <div className="relative w-full max-w-md h-32 overflow-hidden">
  <AnimatePresence mode="wait">
    {(() => {
      switch (activeComponent) {
        case "first":
          return (
            <motion.div
              key="first"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
            >
              <StudentContent username={username} user={user}/>
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
            <FoodMenu />
            </motion.div>
          );
          case "third":
            return (
              <motion.div
                key="third"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
              <TicketSystem username={username} user={user.name} room={user.room_number} />
              </motion.div>
            );
            case "fourth":
              return (
                <motion.div
                  key="fourth"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                <FetchTickets disabled={'disabled'}/>
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