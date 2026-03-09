import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 py-10 text-center shadow-md">
        <h1 className="text-4xl font-extrabold text-white mb-2">í³‹ Form Handling in React</h1>
        <p className="text-blue-100 text-lg">Controlled Components vs Formik</p>
      </header>
      <main className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-center text-lg font-bold text-blue-600 mb-4">Controlled Components</h3>
          <RegistrationForm />
        </div>
        <div>
          <h3 className="text-center text-lg font-bold text-purple-600 mb-4">Formik + Yup</h3>
          <FormikForm />
        </div>
      </main>
    </div>
  );
}

export default App;
