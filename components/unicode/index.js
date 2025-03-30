import './style.css';
import Image from "next/image";
import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function UniCode({username,user}){
    console.log('User:',user);
    
    return(
            <div className='unicode-cont'>
            <div className='sub-unicode-cont'>
            <p className='uni-code-title'>UNIQUE CODE FOR</p>
            <h3 className='uni-code'>{user.name}</h3>
            </div>
            {/* <Image src="/qr-demo.png" alt="Description" width={50} height={50} className='qr-code'/> */}
        {username && <QRCodeCanvas value={username} size={70} />}
            </div>
    );
}