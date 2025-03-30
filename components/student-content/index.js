import UniCode from "../unicode";
import Breakfast from "../breakfast";
export default function StudentContent({username,user}){
return(
    <>
    <Breakfast />
    <UniCode username={username} user={user}/>
    </>
);
}