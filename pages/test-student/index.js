import FoodInfo from "../../components/breakfast";
import Navbar from "../../components/navbar";
import UniCode from "../../components/unicode";
import OptionSelect from "../../components/option-select";
import './style.css';

export default function StudentPage() {

    return (
        <>
        <Navbar />
        <div className="container p-3">
            <OptionSelect />
        </div>
        </>
    );
}
