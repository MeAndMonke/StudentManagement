import { Route, Routes } from "react-router-dom";

import Home from "../pages/admin/Home";


import NotFound from "../pages/NotFound";

export default function AdminRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            {/* catch undefined routes */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}