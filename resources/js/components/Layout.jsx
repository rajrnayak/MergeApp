import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Header.jsx";
import Home from "./Home.jsx";
import UserIndex from "../pages/user/index.jsx";
import Create from "../pages/user/create.jsx";
import StudentIndex from "../pages/student/Index.jsx";
import TeacherIndex from "../pages/teacher/Index.jsx";
// import NotFound from "./NotFound.jsx";

function Layout() {
    return (
        <>
            <Header />
            <div className="main">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/user" element={<UserIndex />} />
                    <Route exact path="/user/create" element={<Create />} />
                    <Route exact path="/student" element={<StudentIndex />} />
                    <Route exact path="/teacher" element={<TeacherIndex />} />
                    <Route exact path="*" element={<Navigate to="/" />} />
                    {/* <Route exact path="*" element={<NotFound />} /> */}
                </Routes>
            </div>
        </>
    );
}

export default Layout;
