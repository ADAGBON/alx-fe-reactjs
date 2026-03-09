import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required.'),
  email: Yup.string().email('Enter a valid email address.').required('Email is required.'),
  password: Yup.string().min(6, 'Password must be at least 6 characters.').required('Password is required.'),
});

function FormikForm() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Create an Account</h2>
      <p className="text-gray-500 text-sm mb-6">Using Formik & Yup</p>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm, setStatus }) => {
          setStatus({ success: '✅ Registration successful!' });
          resetForm();
        }}
      >
        {({ status }) => (
          <Form className="space-y-5">
            {status?.success && <div className="bg-green-100 text-green-700 font-semibold px-4 py-3 rounded-lg">{status.success}</div>}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Username</label>
              <Field type="text" name="username" placeholder="Enter your username" className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 transition" />
              <ErrorMessage name="username" component="p" className="text-red-500 text-sm mt-1" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
              <Field type="email" name="email" placeholder="Enter your email" className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 transition" />
              <ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
              <Field type="password" name="password" placeholder="Enter your password" className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 transition" />
              <ErrorMessage name="password" component="p" className="text-red-500 text-sm mt-1" />
            </div>
            <button type="submit" className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 rounded-lg shadow transition duration-200">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikForm;
