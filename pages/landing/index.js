import Navbar from "../../components/navbar";
import FoodInfo from "../../components/breakfast";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/global.css';
import Loader from "../../components/loader";

export default function Landing(){
    return(
        <div>
            <Navbar />
            <div className="container">
            <FoodInfo status={2} name={"Breakfast"}/> {/*need data from backend*/}
            <FoodInfo status={1} name={"Lunch"} />
            <FoodInfo status={3} name={"Dinner"} />
            <Loader />
           </div>
        </div>
    );
}

