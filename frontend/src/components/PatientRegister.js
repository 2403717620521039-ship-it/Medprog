import { useState } from "react";
import api from "../services/api";

export default function PatientRegister() {
  const [form, setForm] = useState({
    patientName: "",
    age: "",
    gender: "",
    phone: "",
    address: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/patients", form);
      alert("Patient Registered Successfully");

      // reset form
      setForm({
        patientName: "",
        age: "",
        gender: "",
        phone: "",
        address: ""
      });
    } catch (error) {
      console.log(error);
      alert("Error registering patient");
    }
  };

  return (
    <div>
      <h2>Patient Register</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="patientName"
          value={form.patientName}
          onChange={handleChange}
          placeholder="Patient Name"
        />

        <input
          name="age"
          value={form.age}
          onChange={handleChange}
          placeholder="Age"
        />

        <input
          name="gender"
          value={form.gender}
          onChange={handleChange}
          placeholder="Gender"
        />

        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone"
        />

        <input
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Address"
        />

        <button type="submit">Register Patient</button>
      </form>
    </div>
  );
}