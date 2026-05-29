import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h2>MedQueue Dashboard</h2>

      <Link to="/login">Login</Link><br />
      <Link to="/register">Register</Link><br />
      <Link to="/patient-register">Patient Register</Link><br />
      <Link to="/add-appointment">Add Appointment</Link><br />
      <Link to="/appointments">Appointment List</Link>
    </div>
  );
}