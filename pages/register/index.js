import { useState } from "react";
import Login from "../../components/login";
import Egister from "../../components/egister";

export default function Register() {
  const [isLogin, setIsLogin] = useState(true);
  const switchToRegister = () => setIsLogin(false);
  const switchToLogin = () => setIsLogin(true);

  return (
    <div>
          <Egister switchToLogin={switchToLogin} />
    </div>
  );
}