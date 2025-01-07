import { Routes, Route } from "react-router-dom";
import HomePage from "../screens/home";
import Login from "../screens/login";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
