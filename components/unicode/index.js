import './style.css';
import Image from "next/image";

export default function UniCode(){
    return(
            <div className='unicode-cont'>
            <div className='sub-unicode-cont'>
            <p className='uni-code-title'>UNIQUE CODE</p>
            <h3 className='uni-code'>#009309KAI</h3>
            </div>
            <Image src="/qr-demo.png" alt="Description" width={50} height={50} className='qr-code'/>
            </div>
    );
}