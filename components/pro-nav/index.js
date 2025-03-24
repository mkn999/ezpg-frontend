import './style.css';
import Breakfast from '../breakfast';

export default function ProNav({ user }){
    return(
        
        <>
        <nav className='nav'>
        <p className='white-color' >Welcome <span>{user.name}</span> !</p>
        </nav>
        <Breakfast name={'Breakfast'} />
        <Breakfast name={'Lunch'} />
        <Breakfast name={'Dinner'} />
        </>
    );
}