import { Routes, Route } from "react-router-dom";
import HomePage from "../screens/home";
import Login from "../screens/login";
import Dashboard from "../screens/dashboard";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
