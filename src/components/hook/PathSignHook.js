import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const PathSignHook = () => {
  const isLogined = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLogined) return navigate("/");
  }, [isLogined]);
};
