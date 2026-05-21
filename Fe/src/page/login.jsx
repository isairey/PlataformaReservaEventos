import { useEffect } from "react";
import { LoginView } from "../sections/login";
import { useNavigate } from "react-router-dom";

//----------------------------------------------------------------------

export default function LoginPage() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : "";
    if (token) navigate(-1);
  }, []);

  return (
    <>
      <div>
        <LoginView />
      </div>
    </>
  );
}
