import { useState } from 'react';
import './style.css';
import FemaleInfo from '../../components/female-info';
import Navbar from '../../components/navbar';
import MaleInfo from '../../components/male-info';

export default function Admin() {
    const [isComponentA, setIsComponentA] = useState(true);

    return (
        <div>
            <Navbar />

           
            <div className='containeri'>
            <p className='title-mf'>{isComponentA ? "Male List" : "Female List"}</p>
            {isComponentA ? <MaleInfo /> : <FemaleInfo />}
            </div>

            <div className='containery'>
                <button onClick={() => setIsComponentA(true)} disabled={isComponentA} className='btn-ad'>
                    Back
                </button>
                <button onClick={() => setIsComponentA(false)} disabled={!isComponentA} className='btn-ad'>
                    Next
                </button>
            </div>
        </div>
    );
}
