import FoodInfo from "../../components/breakfast";
import Navbar from "../../components/navbar";
import UniCode from "../../components/unicode";
import './style.css';

export default function StudentPage() {

    return (
        <>
        <Navbar />
        <div className="container p-3">
            <p className="title-for px-2">Food Info</p>
            <FoodInfo name={"Breakfast"} />
            <FoodInfo name={"Lunch"} />
            <FoodInfo name={"Dinner"} />
            <UniCode />
        </div>
        </>
    );
}
