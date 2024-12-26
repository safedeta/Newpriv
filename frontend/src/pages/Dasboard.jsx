import { useAuth } from "../Auth/AuthProvider";

export default function Dasboard() {
    const auth = useAuth();
    return <h1 className="text-3xl font-bold text-center mt-8">Dasboard de { auth.getUser()?.name || ""}</h1>
}