import { Routes, Route } from "react-router-dom";

import AdminRoutes from "./routes/AdminRoutes";
import TeacherRoutes from "./routes/TeacherRoutes";
import StudentRoutes from "./routes/StudentRoutes";
import AuthRoutes from "./routes/AuthRoutes";
import NotFound from "./pages/NotFound";

// define all the possivle user types
type UserStatus = "admin" | "teacher" | "student";
const userStatus: UserStatus | undefined = undefined;

const routes = {
    admin: <AdminRoutes />,
    teacher: <TeacherRoutes />,
    student: <StudentRoutes />,
};

export default function App() {
    if (!userStatus) {
        return <AuthRoutes />;
    }

    return routes[userStatus] ?? <NotFound />;
}