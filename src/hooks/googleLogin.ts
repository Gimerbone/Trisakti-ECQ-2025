import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../store/firebase";

export const useGoogleLogin = () => {
  const navigate = useNavigate();

  const login = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/biodata"); // redirect after successful login
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert("Login failed: ${error.message}");
      } else {
        alert("Login failed: An unknown error occurred.");
      }
    }
  };

  return { login };
};