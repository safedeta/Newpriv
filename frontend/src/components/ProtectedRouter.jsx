import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthProvider";

export default function ProtectedRouter() {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
