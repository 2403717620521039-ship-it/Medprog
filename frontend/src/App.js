import PatientForm from "./components/PatientForm";
import PatientList from "./components/PatientList";
import AppointmentForm from "./components/AppointmentForm";
import AppointmentList from "./components/AppointmentList";

function App() {
  return (
    <div className="container">
      <h1>🏥 MedQueue System</h1>

      <PatientForm />
      <PatientList />

      <hr />

      <AppointmentForm />
      <AppointmentList />
    </div>
  );
}

export default App;