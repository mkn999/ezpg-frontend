import MainLogin from "../../components/login";


export default function AdminLogin(){
    
    return(
        <>
        <MainLogin link="http://localhost:3110/nadmin-login" profile={"/nadmin-profile"}/>
        </>
       
    );
}