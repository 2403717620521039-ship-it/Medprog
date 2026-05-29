import { useEffect, useState } from "react";
import api from "../services/api";

export default function AppointmentList() {
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = async () => {
    try {
      const res = await api.get("/appointments");
      setAppointments(res.data);
    } catch (error) {
      console.log(error);
      alert("Error fetching appointments");
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div>
      <h2>Appointment List</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Doctor</th>
            <th>Date</th>
            <th>Symptoms</th>
          </tr>
        </thead>

        <tbody>
          {appointments.map((item) => (
            <tr key={item._id}>
              <td>{item.patientName}</td>
              <td>{item.age}</td>
              <td>{item.gender}</td>
              <td>{item.doctor}</td>
              <td>{item.date}</td>
              <td>{item.symptoms}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}