import { Route, Routes } from "react-router-dom";

import Home from "../pages/teacher/Home";


import NotFound from "../pages/NotFound";

export default function TeacherRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            
            {/* catch undefined routes */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}