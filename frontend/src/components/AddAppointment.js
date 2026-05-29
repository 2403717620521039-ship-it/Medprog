import { useState } from "react";
import api from "../services/api";

export default function AddAppointment() {
  const initialState = {
    patientName: "",
    age: "",
    gender: "",
    doctor: "",
    date: "",
    symptoms: ""
  };

  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/appointments", form);

      alert("Appointment Added");

      // IMPORTANT RESET FIX
      setForm(initialState);

    } catch (error) {
      console.log(error);
      alert("Error adding appointment");
    }
  };

  return (
    <div>
      <h2>Add Appointment</h2>

      <form onSubmit={handleSubmit} autoComplete="off">

        <input
          name="patientName"
          value={form.patientName}
          onChange={handleChange}
          placeholder="Patient Name"
          autoComplete="off"
        />

        <input
          name="age"
          value={form.age}
          onChange={handleChange}
          placeholder="Age"
          autoComplete="off"
        />

        <input
          name="gender"
          value={form.gender}
          onChange={handleChange}
          placeholder="Gender"
          autoComplete="off"
        />

        <input
          name="doctor"
          value={form.doctor}
          onChange={handleChange}
          placeholder="Doctor"
          autoComplete="off"
        />

        <input
          name="date"
          value={form.date}
          onChange={handleChange}
          placeholder="Date"
          autoComplete="off"
        />

        <input
          name="symptoms"
          value={form.symptoms}
          onChange={handleChange}
          placeholder="Symptoms"
          autoComplete="off"
        />

        <button type="submit">Add Appointment</button>
      </form>
    </div>
  );
}