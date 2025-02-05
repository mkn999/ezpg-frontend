import React from "react";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function FoodInfo ({ status, name }) {
return(
    <div>

    <div className="finfo-cont">
    {status%2==0 ? 
    <div className="indicator ready"></div>
    :
    <div className="indicator nready"></div>
    }
    <p className="m-0">{name}</p>
    </div>
   
    </div>
);
};