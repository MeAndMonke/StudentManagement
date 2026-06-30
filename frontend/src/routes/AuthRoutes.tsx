import { Route, Routes } from "react-router-dom";

import LandingPage from "../pages/auth/LandingPage";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";


import NotFound from "../pages/NotFound";

export default function AuthRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            {/* catch undefined routes */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}