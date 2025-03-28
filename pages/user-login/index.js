import { useState } from "react";
import { useRouter } from "next/router";
import MainLogin from "../../components/login";
export default function LoginPage() {
return(
  <div>
    <MainLogin link="http://localhost:3110/tesalogin" profile={"/profile"}/>
  </div>
);
}
