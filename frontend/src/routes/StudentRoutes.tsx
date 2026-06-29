import { Route, Routes } from "react-router-dom";

import Home from "../pages/student/Home";


import NotFound from "../pages/NotFound";

export default function StudentRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            {/* catch undefined routes */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}