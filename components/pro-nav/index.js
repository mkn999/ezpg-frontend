import './style.css';
import Breakfast from '../breakfast';
import Image from 'next/image';
export default function ProNav({ user }){
    return(
        
        <>
        <nav className='nava'>
        <Image src="/images/avatar.png" alt="My Image" width={50} height={50} />
        <p className='white-color' >Welcome <span>{user.name}</span> !</p>
        </nav>
        </>
    );
}