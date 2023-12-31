import { Routes, Route } from "react-router-dom";
import LogIn from "@/LogIn";
import App from "@/App";
import RegisterPage from "@/RegisterPage";


function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/app" element={<App />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/login/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default AllRoutes;
