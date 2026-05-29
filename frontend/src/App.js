import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import AddAppointment from "./components/AddAppointment";
import PatientRegister from "./components/PatientRegister";
import AppointmentList from "./components/AppointmentList";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-appointment" element={<AddAppointment />} />
        <Route path="/patient-register" element={<PatientRegister />} />
        <Route path="/appointments" element={<AppointmentList />} />
      </Routes>
    </BrowserRouter>
  );
}