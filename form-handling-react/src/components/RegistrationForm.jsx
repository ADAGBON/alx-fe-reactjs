import { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = 'Username is required.';
    if (!formData.email.trim()) { newErrors.email = 'Email is required.'; }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { newErrors.email = 'Enter a valid email address.'; }
    if (!formData.password.trim()) { newErrors.password = 'Password is required.'; }
    else if (formData.password.length < 6) { newErrors.password = 'Password must be at least 6 characters.'; }
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
    setSuccessMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    setSuccessMessage('✅ Registration successful!');
    setFormData({ username: '', email: '', password: '' });
    setErrors({});
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Create an Account</h2>
      <p className="text-gray-500 text-sm mb-6">Using Controlled Components</p>
      {successMessage && <div className="bg-green-100 text-green-700 font-semibold px-4 py-3 rounded-lg mb-6">{successMessage}</div>}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Username</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Enter your username" className={`w-full border rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${errors.username ? 'border-red-400' : 'border-gray-300'}`} />
          {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className={`w-full border rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${errors.email ? 'border-red-400' : 'border-gray-300'}`} />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" className={`w-full border rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${errors.password ? 'border-red-400' : 'border-gray-300'}`} />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg shadow transition duration-200">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
