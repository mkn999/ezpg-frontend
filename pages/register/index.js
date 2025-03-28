import { useState } from "react";
import Login from "../../components/login";
import Egister from "../../components/egister";

export default function Register() {
  const [isLogin, setIsLogin] = useState(true);
  const switchToRegister = () => setIsLogin(false);
  const switchToLogin = () => setIsLogin(true);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        {/* {isLogin ? (
          <Login switchToRegister={switchToRegister} />
        ) : ( */}
          <Egister switchToLogin={switchToLogin} />
        {/* )} */}
      </div>
    </div>
  );
}