import { useContext } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";


export default function ProtectedPage() {
  const login = useSelector(state => state.user)

  if (login.isLogin) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
}
