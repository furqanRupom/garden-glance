import { useSelector } from "react-redux"
import { getCurrentUser } from "../redux/features/auth/authSlice"
import { Navigate } from "react-router-dom";
import { FC, ReactNode } from "react";

interface userProtectedProps {
  children: ReactNode;
}

export const UserProtectedRoute:FC<userProtectedProps> = ({children}) => {
  const user = useSelector(getCurrentUser);


  if(!user){
  return <Navigate to="/login"></Navigate>
  }
  return children
}

