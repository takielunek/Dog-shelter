import { Routes, Route } from "react-router-dom";
import LogIn from "./LogIn";
import App from "./App";

function AllRoutes() {

  return (
    <>
      <Routes>
        <Route path="/app" element={<App />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </>
  );
}

export default AllRoutes;
