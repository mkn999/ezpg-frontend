import './style.css';
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginPage(){
    const router = useRouter();

    const goToReg = () => {
      router.push("/register");
    };
  
    return(
        <div className='cont-login'>
            <div class="login-down">
            <Image src="/command.png" alt="Description" width={200} height={200} />
            <p>EZPG</p>
            </div>
            <button onClick={goToReg}>Login</button>
        </div>
    );
}