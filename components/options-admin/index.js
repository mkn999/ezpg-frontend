import { useState } from "react";
import { UserRoundX ,UserRoundSearch,Mars,Venus,BookUser,Gauge,Tickets  } from "lucide-react"; // Import icons
import MaleInfo from "../male-info";
import FemaleInfo from "../female-info";
import { motion, AnimatePresence } from "framer-motion";
import './style.css';
import StudentSearch from "../student-search";
import UserDelete from "../delete-user";
import FoodFetch from "../food-fetch";
import AdminDashboard from "../admin-dashboard";
import FetchTickets from "../fetch-tickets";


export default function AdminOptions(){
    const [activeComponent, setActiveComponent] = useState("zero");
    return(
        <div className="m-cont">   
            <div className="button-cont">
                <button className={`buttonz ${activeComponent === "zero" ? "checked" : "unchecked"}`} onClick={()=> setActiveComponent("zero")}><Gauge /><span className="m-1">Dashboard</span></button>
                <button className={`buttonz ${activeComponent === "last" ? "checked" : "unchecked"}`} onClick={()=> setActiveComponent("last")}><Tickets /><span className="m-1">Tickets</span></button>
                <button className={`buttonz ${activeComponent === "first" ? "checked" : "unchecked"}`} onClick={()=> setActiveComponent("first")}><Mars /> <span className="m-1">Male-Info</span></button>
                <button className={`buttonz ${activeComponent === "second" ? "checked" : "unchecked"}`} onClick={()=> setActiveComponent("second")}><Venus/> <span className="m-1">Female-Info</span></button>
                <button className={`buttonz ${activeComponent === "fifth" ? "checked" : "unchecked"}`} onClick={()=> setActiveComponent("fifth")}><BookUser /><span className="m-1">Food-Log</span></button>
                <button className={`buttonz ${activeComponent === "third" ? "checked" : "unchecked"}`} onClick={()=> setActiveComponent("third")}><UserRoundSearch /> <span className="m-1">User-Search</span></button>
                <button className={`buttonz ${activeComponent === "fourth" ? "checked" : "unchecked"}`} onClick={()=> setActiveComponent("fourth")}><UserRoundX /> <span className="m-1">Delete-User</span></button>


                {/* <button className={`buttonz ${activeComponent === "third" ? "checked" : "unchecked"}`} onClick={()=> setActiveComponent("third")}><UserRoundSearch />Student-Search</button> */}

                </div>
                <div className="container-for-content">
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
          <MaleInfo />
        </motion.div>
      );

    case "second":
      return (
        <motion.div
          key="second"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3 }}
        >
          <FemaleInfo />
        </motion.div>
      );

    case "third":
      return (
        <motion.div
          key="third"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3 }}
        >
        <StudentSearch />
        </motion.div>
      );
      case "fourth":
        return (
          <motion.div
            key="fourth"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
          >
          <UserDelete />
          </motion.div>
        );
        case "fifth":
          return (
            <motion.div
              key="fifth"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
            >
            <FoodFetch />
            </motion.div>
          );
          case "zero":
            return (
              <motion.div
                key="sixth"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3 }}
              >
                <AdminDashboard/>
              </motion.div>
            );
            case "last":
              return (
                <motion.div
                  key="seventh"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.3 }}
                >
                  <FetchTickets />
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