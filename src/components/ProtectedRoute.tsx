import { Navigate } from "react-router-dom";

import { useAuth } from "../hooks/auth.ts";
import type { ProtectedRouteProps } from "../types/protected.ts";

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" replace />;
  }

  return children;
};

export default ProtectedRoute;