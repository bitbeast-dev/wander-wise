import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import pb from "./pocketbase";

function isLoggedIn() {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = pb.authStore.isValid;

    if (!loggedIn) {
      navigate("/login");
    }
  }, []);
}

export default isLoggedIn;
