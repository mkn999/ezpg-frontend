import Navbar from "../../components/navbar";
import FoodInfo from "../../components/breakfast";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/global.css';
import Loader from "../../components/loader";
import FoodGraph from "../../components/food-graph";

export default function Landing(){
    return(
        <div>
            <Navbar />
            {/* 
            <div className="container">
            <FoodInfo status={2} name={"Breakfast"}/>
            <FoodInfo status={1} name={"Lunch"} />
            <FoodInfo status={3} name={"Dinner"} />
            <Loader /> */}
            <FoodGraph />
        </div>
    );
}

