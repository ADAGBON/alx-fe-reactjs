import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1>React Form Handling</h1>
      <div className="forms-wrapper">
        <div className="form-section">
          <RegistrationForm />
        </div>
        <div className="form-section">
          <FormikForm />
        </div>
      </div>
    </div>
  );
}

export default App;
